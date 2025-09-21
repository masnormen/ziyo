FROM docker.io/node:22.16.0-alpine as deps
WORKDIR /app

COPY . .
RUN npm install -g pnpm@10.12.1
RUN pnpm install --prod --frozen-lockfile

FROM docker.io/node:22.16.0-alpine as copier

COPY --from=deps app/.next/standalone .
COPY --from=deps app/public apps/ziyo-fe/public
COPY --from=deps app/.next/static dist/apps/ziyo-fe/.next/static

ENV PORT 4200
EXPOSE 4200
ENTRYPOINT ["node", "apps/ziyo-fe/server.js"]