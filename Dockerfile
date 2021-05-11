FROM node:lts-alpine

WORKDIR /home/api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

RUN npx sequelize db:create test-concerts

RUN npx sequelize db:migrate

CMD ["npm", "run", "dev"]
