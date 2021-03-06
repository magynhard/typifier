# typifier

[![npm](https://img.shields.io/npm/v/typifier?color=default&style=plastic&logo=npm)](https://www.npmjs.com/package/typifier)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/magynhard/typifier?color=default&label=browser&logo=javascript&style=plastic)](https://github.com/magynhard/typifier/releases)
![npm](https://img.shields.io/npm/dt/typifier?color=blue&style=plastic)
[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg?style=plastic&logo=mit)](LICENSE)

> The javascript library to get or check the type of a given variable.

# Table of contents

* [Usage](#usage)
* [Installation](#installation)
    * [NodeJS](#installation_node_js)
    * [Browser](#installation_browser)
* [Documentation](#documentation)
* [Contributing](#contributing)

<a name="usage"></a>

## Usage

### Usage example

```js
// -- node js --
Typifier = require('typifier');
// -- browser --
<script type="text/javascript" src="js/lib/typifier.bundle.js"></script>



// -- code samples --
Typifier.getType("sample");
// => "string"
Typifier.getType([1,2,3]);
// => "Array"
Typifier.isArray([1,2,3]);
// => true 
Typifier.is('Array',"no_array");
// => false 
Typifier.is('MyClass',new MyClass());
// => true
Typifier.isNumberString('50.25');
// => true
```

<a name="installation"></a>

## Installation

### NodeJS

You can either use npm or yarn to install *typifier*.

#### yarn

In your project root directory execute the following command:

```bash
yarn add typifier
```

### npm

In your project root directory execute the following command:

```bash
npm install typifier
```

### Browser

Download the latest [release on Github](https://github.com/magynhard/typifier/releases) or the from the folder `dist` and put it in an appropriate folder of your project, e.g. `js/lib`
and reference it by a script tag in your project:

```html

<script type="text/javascript" src="js/lib/typifier.bundle.js"></script>
```

Optionally you may add the source file to your build pipeline, if you are using webpack, brunch or any other packager.

#### Bundle releases
As `typifier` depends on [LuckyCase](https://github.com/magynhard/lucky-case), there is also a bundle release called `typifier.bundle.js` where the latter is included. If you already use [LuckyCase](https://github.com/magynhard/lucky-case) separately, use the default version `typifier.js` without included dependencies. If you don't know what you should use, use the bundled release!

#### Minified releases
If you prefer minified builds, use the `*.min.js` version. Be aware that they do not contain any javascript documentation that may be very useful when working with a powerful IDE.


<a name="documentation"></a>

## Documentation
See JS doc [here](doc/typifier.jsdoc.md).


<a name="contributing"></a>

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/magynhard/typifier. This project is intended
to be a safe, welcoming space for collaboration, and contributors are expected to adhere to
the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

