import { OffsetDrawMethods } from "./offset-drawing";
import { AssetData, GenericAssetMap, DrawSpriteParams } from "./types";

export type DrawSpriteFunction<Key extends string> = { (params: DrawSpriteParams<Key>): void }

export const drawSpriteFunc = <Key extends string>(
    drawingMethods: OffsetDrawMethods,
    assets: GenericAssetMap<Key>,
    allAssetData: Record<Key, AssetData>,
    defaultWidth = 50,
    defaultHeight = 50
): DrawSpriteFunction<Key> =>
    ({
        key,
        x, y,
        fx = 0, fy = 0,
        width = defaultWidth, height = defaultHeight,
        center = false
    }: DrawSpriteParams<Key>) => {
        const assetData = allAssetData[key];
        const img = assets[key];
        const spriteDims = assetData.sprites ?? { rows: 1, cols: 1 }
        const frameWidth = img.naturalWidth / spriteDims.cols
        const frameHeight = img.naturalHeight / spriteDims.rows
        const adjustedX = center ? x - width / 2 : x;
        const adjustedY = center ? y - height / 2 : y;

        drawingMethods.drawImage(
            img,
            fx * frameWidth,
            fy * frameHeight,
            frameWidth, frameHeight,
            adjustedX,
            adjustedY,
            width, height
        )
    }

