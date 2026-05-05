// src/pages/api/downloads.ts
// Serverless API endpoint — đọc/ghi lượt tải qua Upstash REST API
// Compatible với Vercel + Upstash Redis

export const prerender = false;

const UPSTASH_URL = import.meta.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = import.meta.env.UPSTASH_REDIS_REST_TOKEN;
const KEY = 'download_count_v100';

async function getCount(): Promise<number> {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) return 0;
  try {
    const res = await fetch(`${UPSTASH_URL}/get/${KEY}`, {
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    });
    const data = await res.json();
    return parseInt(data.result ?? '0', 10) || 0;
  } catch {
    return 0;
  }
}

async function incrementCount(): Promise<number> {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) return 0;
  try {
    const res = await fetch(`${UPSTASH_URL}/incr/${KEY}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
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
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}

export async function POST() {
  const count = await incrementCount();
  return new Response(JSON.stringify({ count }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}
