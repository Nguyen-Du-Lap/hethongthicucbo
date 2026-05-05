const GET = ({ site }) => {
  const origin = site?.href?.replace(/\/$/, "") ?? "https://example.com";
  const body = `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap-index.xml
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
