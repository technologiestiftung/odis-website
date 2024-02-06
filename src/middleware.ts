import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (req, next) => {
  console.log("[Middleware] onRequest", req.url.pathname);
  return await next();
};
