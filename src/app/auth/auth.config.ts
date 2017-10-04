import {ENV} from '../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
  NAMESPACE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'DoEgovJ4bA0c1ZcE7mfo9ExmLJ7Ic65X',
  CLIENT_DOMAIN: 'serenity1994.auth0.com',
  // AUDIENCE: 'https://serenity1994.auth0.com/userinfo',
  AUDIENCE: 'http://localhost:8083/api/',
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile',
  NAMESPACE: 'http://myapp.com/roles',
};
