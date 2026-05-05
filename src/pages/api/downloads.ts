// src/pages/api/downloads.ts
// Serverless API endpoint — đọc/ghi lượt tải qua Upstash REST API

export const prerender = false;

const KEY = 'download_count_v100';

function getCredentials() {
  // Dùng process.env để tương thích với Vercel serverless runtime
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  return { url, token, valid: !!(url && token) };
}

async function getCount(): Promise<number> {
  const { url, token, valid } = getCredentials();
  if (!valid) return 0;
  try {
    const res = await fetch(`${url}/get/${KEY}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return parseInt(data.result ?? '0', 10) || 0;
  } catch {
    return 0;
  }
}

async function incrementCount(): Promise<number> {
  const { url, token, valid } = getCredentials();
  if (!valid) return 0;
  try {
    const res = await fetch(`${url}/incr/${KEY}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return parseInt(data.result ?? '0', 10) || 0;
  } catch {
    return 0;
  }
}

export async function GET() {
  const count = await getCount();
  return new Response(JSON.stringify({ count }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}

export async function POST() {
  const count = await incrementCount();
  return new Response(JSON.stringify({ count }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}
