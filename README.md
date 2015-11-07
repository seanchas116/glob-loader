# glob-loader [![npm version](https://badge.fury.io/js/glob-loader.svg)](http://badge.fury.io/js/glob-loader)
webpack loader to load files at once with glob

[![Build Status](https://travis-ci.org/seanchas116/glob-loader.svg?branch=master)](https://travis-ci.org/seanchas116/glob-loader)

## Install

```
npm install --save-dev glob-loader
```

## Use

* Create a glob pattern file (example: `dir.pattern`)
* Write the pattern of the files that you want to require
* Require it with `glob-loader`

### `dir.pattern` file

Pattern is relative to the file directory.

```
./dir/**/*.js
```

### Require patterns

```js
var modules = require("glob-loader!./dir.pattern");
```

## TODO

* source map
