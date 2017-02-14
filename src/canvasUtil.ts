export function createCanvasAndContext(width: number = 512, height: number = 512): [HTMLCanvasElement, WebGLRenderingContext] {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("webgl");
    return [canvas, ctx];
}