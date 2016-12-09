# <%= props.name %> [![Build Status](https://secure.travis-ci.org/cfpb/<%= slugname %>.png?branch=master)](http://travis-ci.org/cfpb/<%= slugname %>)
<% if (props.browser === "yes") { %>
[![NPM](https://nodei.co/npm/<%= slugname %>.png?downloads=true)](https://nodei.co/npm/<%= slugname %>/)

[![browser support](https://ci.testling.com/cfpb/<%= slugname %>.png)
](https://ci.testling.com/cfpb/<%= slugname %>)
<%}%>
> <%= props.description %>

## Installation

First install [node.js](http://nodejs.org/). Then:

```sh
npm install <%= slugname %> --save
```
<% if (props.browser === "yes") { %>
Grab the `dist/<%= slugname %>.js` file and include it at the bottom of your page:

```html
<script src="<%= slugname %>.js"></script>
```

Or use [Browserify](http://browserify.org/):
<%}%>
```sh
npm install <%= slugname %> --save
var <%= slugname %> = require('<%= slugname %>');
```

## Usage

```javascript
var <%= slugname %> = require('<%= slugname %>');
<%= slugname %>({ thing: 'foo', anotherThing: 'bar' });
```

## Contributing

Please read the [Contributing guidelines](CONTRIBUTING.md).

### Running Tests

We are using [nodeunit](https://github.com/caolan/nodeunit) to test. To run tests, first install nodeunit and any dependencies via npm:

```
npm install
```

Run tests with:

```
npm test
```

## License

The project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication](http://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.

Software source code previously released under an open source license and then modified by CFPB staff is considered a "joint work" (see 17 USC § 101); it is partially copyrighted, partially public domain, and as a whole is protected by the copyrights of the non-government authors and must be released according to the terms of the original open-source license.

For further details, please see: http://www.consumerfinance.gov/developers/sourcecodepolicy/
