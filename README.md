# TypeScript-Node-Starter

> 参考 https://github.com/Microsoft/TypeScript-Node-Starter 和 https://github.com/Talento90/typescript-node

tslint 使用 `standard style` https://standardjs.com/ & https://github.com/blakeembrey/tslint-config-standard

## Install & Run

### Local

```shell
npm install # install dependencies
npm run start # start 
```

### develop

```shell
npm install
npm run watch
```

### Docker
```shell
doucker build -t gostudy:8.11.3-alpine -f Dockerfile-base .
docker-compose up # compose and run
docker-compose down # destroy application
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