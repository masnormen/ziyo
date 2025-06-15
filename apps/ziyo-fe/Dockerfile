# Install dependencies only when needed
FROM docker.io/node:22.16.0-alpine as deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm@10.12.1
RUN pnpm install --prod --frozen-lockfile

# Production image, copy all the files and run next
FROM docker.io/node:22.16.0-alpine as runner
ENV NODE_ENV production
ENV PORT 3000
WORKDIR /usr/src/app
COPY --chown=node:node public ./public
COPY --chown=node:node .next/standalone .
COPY --chown=node:node .next/static ./.next/static
USER node
EXPOSE 3000
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node", "apps/ziyo-fe/server.js"]