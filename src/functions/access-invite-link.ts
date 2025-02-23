import { redis } from '../redis/client'

interface AccessInviteLinkParams {
  subscriberId: string
}

export async function accessInviteLink({
  subscriberId,
}: AccessInviteLinkParams) {
  await redis.hincrby('referral:access-count', subscriberId, 1)
}

// { 'wallace123': 1 }
// Toda vez que a funcionaliddade hincrby é chamada, ela acessa a chave wallace123 e incrementa 1
