FROM gostudy:8.11.3-alpine

WORKDIR /app

# COPY . .

# RUN sed -i "s/\"fsevents\": \"\^[0-9.]*\",//g" package-lock.json && \
#   npm install --registry=https://registry.npm.taobao.org && \
#   npm run build

CMD ["npm", "run", "start"]