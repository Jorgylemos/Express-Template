import { DefineConfig } from "./Express.define.config";
import { Express } from 'express';

/**
 * Path ready to use the public file and views folder. Just enter the engine.
 *
 * Engines example: 'ejs','pug'...
 *
 * Example: Path_Config(Variable receive express, views folder, public folder)
 *
 * @Created by Jorge Lemos
 */
export async function Path_Config($app: Express, $engine: string, $path_view: string, $path_public: string) {
    await DefineConfig($app, $engine, $path_view, $path_public);
}

export default Path_Config;