
FROM node:10
RUN mkdir -p /app/client
WORKDIR /app/client
COPY package.json /app/client
COPY package-lock.json /app/client
RUN yarn install
COPY . /app/client
CMD ["npm", "start"]