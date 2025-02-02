export type AssetData = {
    src: string,
    sprites?: {
        cols: number,
        rows: number,
    }
    frameScale?: {
        width?: number
        height?: number
    }
}

export type ViewPort = {
    x: number;
    y: number;
    width: number;
    height: number;
}

export type GenericDataMap<Key extends string> = Record<Key, AssetData>;
export type GenericAssetMap<Key extends string> = Record<Key, HTMLImageElement>;

export type SpriteFrame<Key extends string> = {
    key: Key;
    fx?: number;
    fy?: number;
}

export type DrawSpriteParams<Key extends string> = SpriteFrame<Key> & {
    x: number;
    y: number;
    width?: number;
    height?: number;
    center?: boolean;
    filter?: string;
}
