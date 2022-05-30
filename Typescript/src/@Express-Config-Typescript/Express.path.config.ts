import express from 'express';
import path from 'path';

export async function DefinePath($app: any, $engine: string, $path_view: string, $path_public: string) {
    await $app.set('view engine', $engine)
    await $app.set('views', path.join(__dirname, $path_view));

    await $app.use(express.static($path_public));
    await $app.use(express.static(path.join($path_public)));
}