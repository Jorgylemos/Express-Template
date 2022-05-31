import express from 'express';
import path from 'path';

interface I_Props {
    $app: any,
    $engine: any,
    $path_view: any,
    $path_public: any
}

export async function DefinePath(props: I_Props) {
    await props.$app.set('view engine', props.$engine)
    await props.$app.set('views', path.join(__dirname, props.$path_view));

    await props.$app.use(express.static(props.$path_public));
    await props.$app.use(express.static(path.join(props.$path_public)));
}