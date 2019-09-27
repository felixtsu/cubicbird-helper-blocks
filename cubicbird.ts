//% weight=100 color=#6699CC icon="\uf140"
//% groups='["Tiles"]'
namespace cubicbird{

    //%block
    export function currentTileRowOfSprite(sprite: Sprite): number{
        return getPositionIndex(sprite.x)
    }

    //%block
    export function currentTileColumnOfSprite(sprite: Sprite): number {
        return getPositionIndex(sprite.y)
    }

    //%block
    export function setTile(tile:tiles.Tile, index:number) {
        scene.setTileAt(tile, index)
    }

    //%block
    export function getTileRow(tile:tiles.Tile) : number{
        return getPositionIndex(tile.x)
    }

    //%block
    export function getTileColumn(tile: tiles.Tile): number {
        return getPositionIndex(tile.y)
    }
    
    function getPositionIndex(x:number) {
        let base = Math.pow(2, game.currentScene().tileMap.scale)
        return Math.floor(x/base)
    }
}