// AWS Amplify Configuration
import { Amplify } from 'aws-amplify'

const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_AMPLIFY_USER_POOL_ID || '',
      userPoolClientId: process.env.NEXT_PUBLIC_AMPLIFY_USER_POOL_CLIENT_ID || '',
      loginWith: {
        oauth: {
          domain: process.env.NEXT_PUBLIC_AMPLIFY_OAUTH_DOMAIN || '',
          scopes: ['email', 'profile', 'openid'],
          redirectSignIn: [process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'],
          redirectSignOut: [process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'],
          responseType: 'code',
        },
      },
    },
  },
}

export function configureAmplify() {
  Amplify.configure(amplifyConfig, { ssr: true })
}

export default amplifyConfig
