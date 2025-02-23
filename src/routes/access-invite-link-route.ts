import z from 'zod'

import { accessInviteLink } from '../drizzle/functions/access-invite-link'
import { env } from '../env'

import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

export const AccessInviteLinkRoutes: FastifyPluginAsyncZod = async app => {
  app.get(
    '/invite/:subscriberId',
    {
      schema: {
        summary: 'Access invite link and redirects user',
        tags: ['referral'],
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          302: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params

      await accessInviteLink({ subscriberId })

      const redirectUrl = new URL(env.WEB_URL)

      redirectUrl.searchParams.set('referrer', subscriberId)

      return reply.redirect(redirectUrl.toString(), 302)
    }
  )
}
