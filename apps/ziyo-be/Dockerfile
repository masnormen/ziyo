# Install dependencies only when needed
FROM docker.io/node:20.11.0-alpine as deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --prod --frozen-lockfile

# Production image, copy all the files and run nest
FROM docker.io/node:20.11.0-alpine as runner
RUN apk add --no-cache dumb-init
ENV NODE_ENV production
ENV PORT 4200
WORKDIR /usr/src/app
COPY --from=deps --chown=node:node /usr/src/app/node_modules ./node_modules
COPY --from=deps --chown=node:node /usr/src/app/package.json ./package.json
COPY --chown=node:node . .
USER node
EXPOSE 4200
CMD ["dumb-init", "node", "index.js"]
