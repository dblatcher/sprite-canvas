import { GenericAssetMap, GenericDataMap } from '../types';

export function clamp(value: number, max = 1, min = 0) {
  return Math.max(Math.min(value, max), min);
}

export const getFrameDims = <T extends string>(key: T, assets: GenericAssetMap<T>, allAssetData: GenericDataMap<T>) => {
  const assetData = allAssetData[key];
  const img = assets[key];
  const spriteDims = assetData.sprites ?? { rows: 1, cols: 1 };
  const frameWidth = img.naturalWidth / spriteDims.cols;
  const frameHeight = img.naturalHeight / spriteDims.rows;
  return {
    frameWidth,
    frameHeight,
  };
};
