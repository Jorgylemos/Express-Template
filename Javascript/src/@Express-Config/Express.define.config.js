const { DefinePath } = require('./Express.path.config');

async function DefineConfig($express_app, $user_engine, $path_view, $path_public) {
    [await DefinePath($express_app, $user_engine, $path_view, $path_public)]
}

module.exports = {
    DefineConfig
};