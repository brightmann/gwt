import { Redis } from '@upstash/redis'

function createRedis(): Redis {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) {
    // No Redis configured (local dev, CI, or Cloudflare Workers without the
    // Upstash secrets): degrade view counts to 0 instead of crashing the site.
    const stub = {
      get: async (_key: string) => null,
      mget: async (...keys: string[]) => keys.map(() => null),
      set: async (_key: string, _value: unknown) => 'OK',
    }
    return stub as unknown as Redis
  }
  return Redis.fromEnv()
}

const redis = createRedis()

export default redis
