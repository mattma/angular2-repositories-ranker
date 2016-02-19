# Angular2 Demo Application

> This is a Angular2 demo application.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) 
    Ensure you're running the latest versions Node `v4.1.x`+ and NPM `2.14.x`+

## Quick start

```bash
# clone our repo
git clone https://github.com/mattma/angular2-repositories-ranker

# change directory to our repo
cd angular2-github-ranker

# install the repo with npm
npm install

# start the server
npm start

# go to `http://localhost:4200` in your browser
open http://localhost:4200
```

## Linting Typescript file (Tested, No errors)

```bash
npm run lint
```

## Build for production

```bash
# minify codes, bundled files, hashable file path
npm run build

# server production file
npm run server:prod

# go to `http:127.0.0.1:8080` in your browser
# If port 8080 is unavailable, it will use the next available port
open http://localhost:8080
```

## How it works

![github-repo-ranker](https://cloud.githubusercontent.com/assets/1148428/13168758/ad3977ea-d694-11e5-8c55-bde69a504e04.gif)

## License

Copyright (c) 2016 [Matt Ma](http://mattmadesign.com)