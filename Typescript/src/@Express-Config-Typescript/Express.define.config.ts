import { DefinePath } from './Express.path.config';

interface I_Props {
    $express_app: any,
    $use_engine: any,
    $path_view: any,
    $path_public: any
}

export async function DefineConfig(props: I_Props) {
    [await DefinePath({
        $app: props.$express_app,
        $engine: props.$use_engine,
        $path_view: props.$path_view,
        $path_public: props.$path_public
    })]
}