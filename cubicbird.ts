//% weight=100 color=#6699CC icon="\uf140"
//% groups='["Tiles"]'
namespace cubicbird{

    // %block
    export function currentTileRowOfSprite(sprite: Sprite): number{
        let base = Math.pow(2, game.currentScene().tileMap.scale)
        return Math.floor(sprite.x / base)
    }

    // %block
    export function currentTileColumnOfSprite(sprite: Sprite): number {
        let base = Math.pow(2, game.currentScene().tileMap.scale)
        return Math.floor(sprite.y / base)
    }
    
}