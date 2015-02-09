## laravel-elixir-combine-media-queries

### Install

```sh
$ npm install laravel-elixir-combine-media-queries --save-dev
```

### Example

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-combine-media-queries');

elixir(function (mix) {
    var options = {};
    mix.cmq('path/to/css/**/*.css', 'outputDir', options);
});
```

### Options

[https://github.com/konitter/gulp-combine-media-queries#options](https://github.com/konitter/gulp-combine-media-queries#options)


### License

Copyright 2015, Mamoru Otsuka. Licensed under the MIT license: [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)
