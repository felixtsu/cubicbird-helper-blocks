//% weight=100 color=#6699CC icon="\uf140"
//% groups='["Tiles"]'
namespace cubicbird{

    //%block
    //% group="Tiles"
    export function tileRowOfSprite(sprite: Sprite): number{
        return getPositionIndex(sprite.x)
    }

    //%block
    //% group="Tiles"
    export function tileColumnOfSprite(sprite: Sprite): number {
        return getPositionIndex(sprite.y)
    }
    
     /**
     * Set a tile at the given index
     * @param tile
     * @param index
     */
    //%block
    //% blockId=cubicbirdsettile block="set %tile=gamegettile to %index=colorindexpicker"
    //% group="Tiles"
    //% weight=30
    export function setTile(tile:tiles.Tile, index:number) {
        scene.setTileAt(tile, index)
    }

    //%block
    //% group="Tiles"
    export function getTileRow(tile:tiles.Tile) : number{
        return getPositionIndex(tile.x)
    }

    //%block
    //% group="Tiles"
    export function getTileColumn(tile: tiles.Tile): number {
        return getPositionIndex(tile.y)
    }

    //%block
    //% blockId=cubicbirdtileisIndex block="set %tile=gamegettile to %index=colorindexpicker"
    //%group="Tiles"
    export function tileIsIndex(tile:tiles.Tile, index:number):boolean {
        return tile.tileSet == index
    }
    
    function getPositionIndex(x:number) {
        return x >> game.currentScene().tileMap.scale
    }
}