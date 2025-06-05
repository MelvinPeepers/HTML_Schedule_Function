import type { Config } from '@netlify/functions';

const ADMIN_API_KEY = 'test-key';
const NEXT_APP_API_DOMAIN = 'https://httpbin.org';

export default async () => {
  console.log('Running trait-rolls', NEXT_APP_API_DOMAIN);
  try {
    const response = await fetch(
      `${NEXT_APP_API_DOMAIN}/post`,
      {
        method: 'POST',
        headers: {
          'x-admin-key': ADMIN_API_KEY,
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({ test: true })
      }
    );

    console.log('trait-rolls executed', await response.json());
  } catch (error) {
    console.error('Error trait-rolls:', error);
  }
};

export const config: Config = {
  // every 5 minutes
  schedule: '*/5 * * * *',
};



import type { Config } from '@netlify/functions';
// import { ADMIN_API_KEY, NEXT_APP_API_DOMAIN } from '../constants';

const ADMIN_API_KEY = process.env.ADMIN_API_KEY!;
const NEXT_APP_API_DOMAIN = process.env.NEXT_APP_API_DOMAIN!;

export default async () => {
  console.log('Running trait-rolls', NEXT_APP_API_DOMAIN);
  try {
    const response = await fetch(
      `${NEXT_APP_API_DOMAIN}/api/admin/jobs/trait-rolls`,
      {
        method: 'POST',
        headers: {
          'x-admin-key': ADMIN_API_KEY,
        },
      }
    );

    console.log('trait-rolls executed', await response.json());
  } catch (error) {
    console.error('Error trait-rolls:', error);
  }
};

export const config: Config = {
  // every 5 minutes
  schedule: '*/5 * * * *',
};
