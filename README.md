# css-wrap-loader
[CSS Wrap](https://github.com/benignware/css-wrap) loader for Webpack

## usage

```
module: {
    rules: [
        {
            test: /\.css$/,
            use: 'css-wrap-loader?selector=.wrapper-class'
        }
    ]
}
```