//% weight=100 color=#6699CC icon="\uf140" block="Cubicbird"
//% groups='["Tiles", "Sprite"]'
namespace cubicbird{

    //%block
    //% group="Tiles"
    export function tileRowOfSprite(sprite: Sprite): number{
        return getPositionIndex(sprite.y)
    }

    //%block
    //% group="Tiles"
    export function tileColumnOfSprite(sprite: Sprite): number {
        return getPositionIndex(sprite.x)
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
        return getPositionIndex(tile.y)
    }

    //%block
    //% group="Tiles"
    export function getTileColumn(tile: tiles.Tile): number {
        return getPositionIndex(tile.x)
    }

    //%block
    //% blockId=cubicbirdtileisIndex block="is %tile=gamegettile of %index=colorindexpicker?"
    //%group="Tiles"
    export function tileIsIndex(tile:tiles.Tile, index:number):boolean {
        return tile.tileSet == index
    }
    
    function getPositionIndex(x:number) {
        return x >> game.currentScene().tileMap.scale
    }

    let barWidth = NaN;

    //%block
    //% blockId=cubicbirddisplayHitPointBar block="%x % of hp"
    //% group="Display"
    export function displayHitPointBar(x:number) {
        if (x <= 0) {
            barWidth = NaN;
        } else {
            barWidth = x / 5 * 6;
        }
        game.onPaint(function () {
            if (barWidth) {
                screen.fillRect(20, 110, 120, 4, 1)
                screen.fillRect(20, 111, x / 5 * 6, 2, 3)
            } 
        })
    }

}