<img src="./assets/logo.svg" alt="Flowshade UI Logo" style="width:60px;"/> 

<h1>Flowshade UI</h1>

[![](https://data.jsdelivr.com/v1/package/npm/flowshadeui/badge)](https://www.jsdelivr.com/package/npm/flowshadeui)

A modern UI library built on Tailwind CSS with built in dark mode.

---
### Installation
##### CDN:
A CDN can be a quick and easy way to use Flowshade UI in your project. Just insert the following into your ```<head>``` tag:
```html
<head>
    <!--Include TailwindCSS CDN-->
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
    
    <!-- Include just Flowshade UI styles. -->
    <link href="https://cdn.jsdelivr.net/npm/flowshadeui@latest/dist/css/flowshadeui.css" rel="stylesheet" />
    
    <!-- Enable components that require a script. -->
    <script src="https://cdn.jsdelivr.net/npm/flowshadeui@latest/dist/js/flowshadeui.js" defer></script>
</head>
```

##### TailwindCSS Plugin:
Installing FlowshadeUI from npm can allow you to add FlowshadeUI as a plugin or directly require FlowshadeUI files from ```node_modules```.
```shell
$ npm i flowshadeui
``` 
In `tailwind.config.js`:
```js
module.exports = {
    plugins: [
        require("flowshadeui")
    ]
}
```

---
### Documentation

Documentation is still in the works. It will be out soon :)

---
### License
[![License](https://img.shields.io/badge/MIT-LICENSE-blue?style=for-the-badge)](LICENSE)
