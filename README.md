React MaterialUI
================
material-ui [v0.15.0-beta.1][2]

There are [breaking changes and there are good reasons][3] for it.

The previously used `require` has to be [updated as suggested][1].
```
// use
var AppBar = require('material-ui/AppBar')['default'] ;
// instead of
var AppBar = require('material-ui/AppBar') ;
```


### installing a particular version of a package
Directly from github          
`npm install --save git://github.com/callemall/material-ui.git#v0.15.0-beta.1`

A particular version          
`npm install --save material-ui@0.15.0-beta.1`

### Making the application
- npm init
- add .gitignore

 - npm install babel-cli --save-dev
 - npm install babel-preset-es2015 --save-dev
 - npm install babel-preset-react --save-dev
 - npm install css-loader --save-dev
 - npm install style-loader --save-dev
 - npm install webpack --save-dev

 - npm install flux --save
 - npm install react --save
 - npm install react-dom --save
 - npm install react-router --save

 - npm install material-ui --save
 - npm install react-tap-event-plugin --save

 - npm install underscore --save


[1]: https://github.com/callemall/material-ui/issues/4017
[2]: https://github.com/callemall/material-ui/releases/tag/v0.15.0-beta.1
[3]: https://github.com/callemall/material-ui/pull/3820
