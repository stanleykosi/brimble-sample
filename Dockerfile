FROM node:20.20.2-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts

COPY server.js ./

EXPOSE 3000

CMD ["npm", "run", "start"]
