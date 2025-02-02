import { SpriteFrame } from "./types";

export type Direction = 'Up' | 'Down' | 'Left' | 'Right'


type Animation<Key extends string> = {
    frames: Partial<Record<Direction, SpriteFrame<Key>[]>>
}

export class Sprite<AssetKey extends string, AnimationName extends string = string> {

    defaultDirection: Direction
    animations: Record<AnimationName, Animation<AssetKey> | undefined>
    defaultFrame: SpriteFrame<AssetKey>

    constructor(
        defaultDirection: Direction,
        defaultFrame: SpriteFrame<AssetKey>,
        animations: Record<string, Animation<AssetKey> | undefined>,
    ) {
        this.defaultDirection = defaultDirection
        this.defaultFrame = defaultFrame
        this.animations = animations
        this.getFrame = this.getFrame.bind(this)
    }

    public getFrame(animationName: AnimationName, direction: Direction, frameIndex: number,): SpriteFrame<AssetKey> {
        const animation = this.animations[animationName];
        const frames = animation?.frames[direction] ?? animation?.frames[this.defaultDirection];
        if (!frames) {
            return this.defaultFrame
        }
        return frames[frameIndex % frames.length];
    }

}