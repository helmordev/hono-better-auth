import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { PORT } from "./env";
import { databaseConnection } from "./db/db";
import { auth } from "./lib/auth";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: ["*"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    credentials: true,
    maxAge: 600,
  }),
);

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

databaseConnection().then(() => {
  serve(
    {
      fetch: app.fetch,
      port: Number(PORT),
    },
    (info) => {
      console.log(`Server is running on http://localhost:${info.port}`);
    },
  );
});
