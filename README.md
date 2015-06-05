# glob-loader
webpack loader to load files at once with glob

## Install

```
npm install --save-dev glob-loader
```

## Use

* Create a glob pattern file (example: `dir.pattern`)
* Write the pattern of the files that you want to require
* Require it with `glob-loader`

### `dir.pattern` file

Pattern is relative to the file.

```
./dir/**/*.js
```

### Require patterns

```js
require("glob-loader!./dir.pattern");
```

## TODO

* export required values
* source map
