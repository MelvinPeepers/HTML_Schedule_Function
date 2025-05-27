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
          'Content-Type: 'application/json'
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