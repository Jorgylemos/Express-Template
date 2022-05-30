const express = require('express');
const path = require('path');

async function DefinePath($app, $engine, $path_view, $path_public) {
    await $app.set('view engine', $engine)
    await $app.set('views', path.join(__dirname, $path_view));

    await $app.use(express.static($path_public));
    await $app.use(express.static(path.join($path_public)));
}

module.exports = {
    DefinePath
};