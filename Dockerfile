FROM node:8
RUN apt-get update -y && \
    apt-get upgrade -y
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
RUN npm run-script build

ENTRYPOINT ["node"]
CMD ["node_modules/serve/bin/serve", "-s", "build"]