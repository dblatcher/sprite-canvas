export type AssetData = {
    src: string,
    sprites?: {
        cols: number,
        rows: number,
    }
}

export type ViewPort = {
    x: number;
    y: number;
    width: number;
    height: number;
}

export type GenericAssetMap<Key extends string> = Record<Key, HTMLImageElement>;

export type DrawSpriteParams<Key extends string> = {
    key: keyof GenericAssetMap<Key>;
    x: number;
    y: number;
    fx?: number;
    fy?: number;
    width?: number;
    height?: number;
    center?: boolean;
}
