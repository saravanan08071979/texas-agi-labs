# Use Node LTS
FROM node:20-alpine AS base
WORKDIR /app

# Install deps
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Copy rest + build
COPY . .
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=base /app/ .
EXPOSE 3000
CMD ["npm","run","start"]
