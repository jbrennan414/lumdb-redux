module.exports = {
    "parser":"babel-eslint",
    "env": {
        "browser":true,
        "es6":true,
    },
    "settings":{
        "ecmascript": 6,
        "jsx":true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "experimentalObjectRestSpread":true,
            "experimentalDecorators":true,
            "jsx":true,
        },
        "sourceType":"module"
    },
    "extends":"airbnb",
    "plugins": [
        "react",
    ],
    "rules": {
        "react/jsx-filename-extension":0
    }
}