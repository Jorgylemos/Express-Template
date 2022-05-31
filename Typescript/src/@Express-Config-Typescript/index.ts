import { DefineConfig } from "./Express.define.config";
import { Express } from 'express';

interface I_Props {
    $express_app: Express,
    $use_engine: string,
    $path_view: string,
    $path_public: string
}

/**
 * Path ready to use the public file and views folder. Just enter the engine.
 *
 * Engines example: 'ejs','pug'...
 *
 * Example: Path_Config({
            * Variable receive express,
            * views folder,
            * public folder
            }); 
 *
 * @Created by Jorge Lemos
 */

export async function Path_Config(props: I_Props) {
    await DefineConfig({
        $express_app: props.$express_app,
        $use_engine: props.$use_engine,
        $path_view: props.$path_view,
        $path_public: props.$path_public
    });
}

export default Path_Config;