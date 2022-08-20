import { AuthConfig } from '@ioc:Adonis/Addons/Auth'

const authConfig: AuthConfig = {
  guard: 'api',
  guards: {
    api: {
      driver: 'oat',
      provider: {
        driver: 'lucid',
        identifierKey: 'id',
        uids: ['email'],
        model: () => import('App/Models/User'),
      },
      tokenProvider: {
        type: 'api',
        driver: 'redis',
        redisConnection: 'local',
        foreignKey: 'user_id',
      },
    },
  },
}

export default authConfig
