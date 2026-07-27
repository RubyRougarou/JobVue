#FROM ubuntu:latest
#LABEL authors="arshia.yaghoobi"
#
#ENTRYPOINT ["top", "-b"]

FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm","run","dev","--","--host"]