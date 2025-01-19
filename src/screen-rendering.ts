import { GenericAssetMap, ViewPort } from "./types";

export type BaseGameState = {
    cycleNumber: number;
    mapWidth: number;
    mapHeight: number;
}

export const fullViewPort = (gameState: BaseGameState): ViewPort => ({
    x: 0, y: 0, width: gameState.mapWidth, height: gameState.mapHeight
})

/**
 * Higher level function - returns a function that will draw the scene on a given canvas element.
 * if viewPort is not provided, the entire map is rendered 
 */
export type DrawToCanvasFunction<GameState extends BaseGameState, AssetKey extends string> = {
    (
        state: GameState,
        assets: GenericAssetMap<AssetKey>,
        viewPort?: ViewPort,
    ): { (canvas: HTMLCanvasElement | null): void }
}

/**
 * Draws the scene offscreen and returns an ObjectUrl for the image.
 * The url should be revoked wit URL.revokeObjectURL when no longer needed.
 * if viewPort is not provided, the entire map is rendered 
 */
export type GenerateImageUrl<GameState extends BaseGameState, AssetKey extends string> = {
    (game: GameState, assets: GenericAssetMap<AssetKey>, viewPort?: ViewPort): string
}
