FROM node:9.8.0

RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm install --production

EXPOSE 3000

CMD ['node', 'start.js']