import { DefinePath } from './Express.path.config';

export async function DefineConfig($express_app: any, $user_engine: string, $path_view: string, $path_public: string) {
    [await DefinePath($express_app, $user_engine, $path_view, $path_public)]
}