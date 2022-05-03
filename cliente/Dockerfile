FROM alpine:3.14.6
WORKDIR /app
COPY package.json package-lock.json /app/
RUN apk add --update nodejs npm
RUN npm install
RUN npm install -g nodemon

# FROM node:16-alpine
# WORKDIR /app
# COPY package.json package-lock.json /app/
# RUN npm install
# RUN npm install -g nodemon
CMD ["npm", "start", "Hola"]