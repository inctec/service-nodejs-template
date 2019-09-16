FROM node:12-alpine as builder
RUN apk add --update \
        python \
        g++ \
        make \
        bash \
        coreutils \
    && rm -rf /var/cache/apk/*
RUN npm i -g npm
COPY package*.json ./
COPY tsconfig.json ./
RUN npm ci
COPY . /
RUN npm run build


FROM node:12 AS prod
# always use a subfolder
# https://stackoverflow.com/questions/47382957/docker-build-image-glob-error-error-eperm-operation-not-permitted-scandir
RUN mkdir /app
WORKDIR /app
COPY --from=builder node_modules node_modules
COPY --from=builder "dist" "/app/"

ENV NODE_ENV=production
CMD ["npm", "start"]

FROM prod as test
RUN npm install
ENV NODE_ENV=test
CMD ["npm", "run", "start"]

