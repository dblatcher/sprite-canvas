import { AssetData, SpriteFrame } from "./types";

type Direction = 'Up' | 'Down' | 'Left' | 'Right'



type Animation<Key extends string> = {
    frames: Partial<Record<Direction, SpriteFrame<Key>[]>>
}

export class Sprite<Key extends string = string> {

    defaultDirection: Direction
    animations: Record<string, Animation<Key> | undefined>
    assetData: Record<Key, AssetData>

    constructor(
        defaultDirection: Direction,
        animations: Record<string, Animation<Key> | undefined>,
        assetData: Record<Key, AssetData>
    ) {
        this.defaultDirection = defaultDirection
        this.animations = animations
        this.assetData = assetData
        this.getFrame = this.getFrame.bind(this)
    }

    public getFrame(animationName: string, direction: Direction, frameIndex: number,): SpriteFrame<Key> | undefined {
        const animation = this.animations[animationName];
        const frames = animation?.frames[direction] ?? animation?.frames[this.defaultDirection];
        if (!frames) {
            return undefined
        }
        return frames[frameIndex % frames.length];
    }

}