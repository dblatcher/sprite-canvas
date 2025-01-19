import { GenericDataMap, SpriteFrame } from "./types";

type Direction = 'Up' | 'Down' | 'Left' | 'Right'


type Animation<Key extends string> = {
    frames: Partial<Record<Direction, SpriteFrame<Key>[]>>
}

export class Sprite<AnimationName extends string, AssetKey extends string> {

    defaultDirection: Direction
    animations: Record<AnimationName, Animation<AssetKey> | undefined>
    assetData: GenericDataMap<AssetKey>

    constructor(
        defaultDirection: Direction,
        animations: Record<string, Animation<AssetKey> | undefined>,
        assetData: GenericDataMap<AssetKey>
    ) {
        this.defaultDirection = defaultDirection
        this.animations = animations
        this.assetData = assetData
        this.getFrame = this.getFrame.bind(this)
    }

    public getFrame(animationName: AnimationName, direction: Direction, frameIndex: number,): SpriteFrame<AssetKey> | undefined {
        const animation = this.animations[animationName];
        const frames = animation?.frames[direction] ?? animation?.frames[this.defaultDirection];
        if (!frames) {
            return undefined
        }
        return frames[frameIndex % frames.length];
    }

}