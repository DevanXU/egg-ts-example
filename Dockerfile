FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set registry https://registry.npm.taobao.org/

RUN npm install

COPY . .

EXPOSE 7001

CMD ["npm", "start"]