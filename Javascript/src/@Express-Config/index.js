const { DefineConfig } = require('./Express.define.config')

/**
 * Path ready to use the public file and views folder. Just enter the engine.
 *
 * Engines example: 'ejs','pug'...
 *
 * Example: Path_Config(Variable receive express, views folder, public folder)
 *
 * @Created by Jorge Lemos
 */
async function Path_Config($app, $engine, $path_view, $path_public) {
    await DefineConfig($app, $engine, $path_view, $path_public);
}

module.exports = {
    Path_Config
}