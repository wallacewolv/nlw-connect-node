import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

export const subscribeToEventRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/subscriptions',
    {
      schema: {
        tags: ['subscription'],
        summary: 'Subscribes someone to the event',
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          201: z.object({
            name: z.string(),
            email: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email } = request.body

      // criação na inscrição no banco de dados

      return reply.status(201).send({
        name,
        email,
      })
    }
  )
}
