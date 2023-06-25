FROM node:20-slim AS builder
WORKDIR /home/node/app
COPY . /home/node/app
USER root

COPY . .

RUN apt-get update -y && \
    apt-get install -y openssl

RUN npm install -g @nestjs/cli
RUN npm install
RUN npx prisma generate

USER node

CMD ["npm", "start"]
