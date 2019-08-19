# TypeScript-Node-Starter

> 参考 https://github.com/Microsoft/TypeScript-Node-Starter 和 https://github.com/Talento90/typescript-node

tslint 使用 `standard style` https://standardjs.com/ & https://github.com/blakeembrey/tslint-config-standard

## TODO
- [ ] logger
- [ ] docker dev and prod
- [ ] package optimization

## Docker Config
- https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
- https://medium.com/datreeio/node-js-docker-workflow-b9d936c931e1
- https://hackernoon.com/i-have-a-confession-to-make-i-commit-to-master-6a804f334beb
- https://hackernoon.com/a-better-way-to-develop-node-js-with-docker-cd29d3a0093


## Install & Run

### Local

```shell
npm install # install dependencies
npm run build # build ts files
npm run start # start 
```

### develop

```shell
npm install
npm run watch
```

### Docker
```shell
# development
docker-compose -f docker-compose.yml -f docker-compose.dev.yml build
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
docker-compose down # destroy application

# production
docker-compose -f docker-compose.yml build
docker-compose -f docker-compose.yml up
docker-compose down # destroy application

# build
docker build -t fudan.today
```

## npm commands

- start - Does the same as 'npm run serve'. Can be invoked with npm start
- serve - Runs node on dist/server.js which is the apps entry point
- build - Full build
- build-ts - Compiles all source .ts files to .js files in the dist folder
- watch - Runs all watch tasks (TypeScript, Node). Use this if you're not touching static assets.
- watch-node - Runs node with nodemon so the process restarts if it crashes. Used in the main watch task
- watch-ts - Same as build-ts but continuously watches .ts files and re-compiles when needed
- tslint - Runs TSLint on project files