FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

COPY . .

#in development env
# EXPOSE 3333

CMD [ "node", "src/server.js" ]
