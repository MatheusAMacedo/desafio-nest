FROM node:20-slim

WORKDIR /home/node/app

RUN apt-get update -y && apt-get install -y openssl

COPY . /home/node/app

RUN npm install

EXPOSE 3000

RUN npx prisma generate

CMD [ "npm", "start" ]

