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

        const { width: scaleWidth = 1, height: scaleHeight = 1 } = assetData.frameScale ?? {}
        const adjustedX = center
            ? x - (width * scaleWidth) / 2
            : x + ((width - (width * scaleWidth)) / 2);
        const adjustedY = center
            ? y - (height * scaleHeight) / 2
            : y + ((height - (height * scaleHeight)) / 2);


        drawingMethods.drawImage(
            img,
            fx * frameWidth,
            fy * frameHeight,
            frameWidth, frameHeight,
            adjustedX,
            adjustedY,
            width * scaleWidth, height * scaleHeight
        )
    }

