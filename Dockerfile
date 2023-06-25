FROM node:20-slim AS builder
WORKDIR /home/node/app
COPY . /home/node/app
USER root
USER node

FROM node:20-slim
WORKDIR /home/node/app
COPY --from=builder /home/node/app /home/node/app
RUN apt-get update -y
RUN npm install
RUN apt-get install -y openssl
RUN npx prisma generate

CMD ["npm", "start"]