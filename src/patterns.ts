import { drawSpriteFunc } from "./draw-sprite"
import { getFrameDims } from "./lib/util"
import { makeDrawingMethods } from "./offset-drawing"
import { GenericAssetMap, GenericDataMap, SpriteFrame } from "./types"

export const generatePattern = <T extends string,>(
    ctx: CanvasRenderingContext2D,
    frame: SpriteFrame<T>,
    assets: GenericAssetMap<T>,
    allAssetData: GenericDataMap<T>,
): CanvasPattern | null => {

    const { frameWidth, frameHeight } = getFrameDims(frame.key, assets, allAssetData);


    const pCanvas = document.createElement('canvas')
    pCanvas.width = frameWidth
    pCanvas.height = frameHeight
    const pCtx = pCanvas.getContext('2d')
    if (!pCtx) {
        return null
    }
    const pMethods = makeDrawingMethods(pCtx, { x: 0, y: 0, width: frameWidth, height: frameHeight })

    const pDrawSprite = drawSpriteFunc(pMethods, assets, allAssetData);
    pDrawSprite({ ...frame, x: 0, y: 0, height: frameHeight, width: frameWidth })

    return ctx.createPattern(pCanvas, 'repeat');
}