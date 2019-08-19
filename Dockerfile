# stage 1
FROM node:9-alpine AS builder

# install gyp tools
# RUN apk add --update --no-cache \
#         python \
#         make \
#         g++

WORKDIR /app

COPY ./package*.json /app/
RUN npm install --registry=https://registry.npm.taobao.org
COPY . /app/

RUN npm run tslint \
  && npm run build

# stage 2
FROM node:9-alpine

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app

COPY ./package*.json /app/
RUN npm install --production --registry=https://registry.npm.taobao.org
COPY --from=builder /app/dist /app/dist

HEALTHCHECK --interval=5s \
  --timeout=5s \
  --retries=6 \
  CMD curl -fs http://localhost:$PORT/ || exit 1

EXPOSE 3000

CMD ["npm", "start"]