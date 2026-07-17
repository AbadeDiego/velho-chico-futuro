# ---------- Build stage ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Install deps (use npm ci when a lockfile is present, otherwise fall back to npm install)
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copy source and build (produces .output/ via Nitro node-server preset)
COPY . .
RUN npm run build

# ---------- Runtime stage ----------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Nitro's node-server output is fully self-contained under .output/
COPY --from=builder /app/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
