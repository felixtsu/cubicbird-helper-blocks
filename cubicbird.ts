//% weight=100 color=#6699CC icon="\uf140" block="Cubicbird"
//% groups='["Tiles", "Display", "Sprite"]'
namespace cubicbird {


    let hpManagerSprites: Sprite[] = []
    const CUBICBIRD_HELPER_BLOCKS_SPRITE_HP_DATA_KEY = 'CUBICBIRD_HELPER_BLOCKS_SPRITE_HP_DATA_KEY'

    //%block
    //% group="Tiles"
    export function tileRowOfSprite(sprite: Sprite): number {
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
    export function setTile(tile: tiles.Tile, index: number) {
        scene.setTileAt(tile, index)
    }

    //%block
    //% group="Tiles"
    export function getTileRow(tile: tiles.Tile): number {
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
    export function tileIsIndex(tile: tiles.Tile, index: number): boolean {
        return tile.tileSet == index
    }

    function getPositionIndex(x: number) {
        return x >> game.currentScene().tileMap.scale
    }


    let barWidth = NaN;

    //%block
    //% blockId=cubicbirddisplayHitPointBar block="%x percent of hp"
    //% group="Display"
    export function displayHitPointBar(x: number) {
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


    //%block
    //% blockId=cubicbirdMoveSpriteTowardsOthersprite block="move %sprite=variables_get(mySprite) towards %otherSprite=variables_get(mySprite) || at velocity %veloctiy"
    //% group="Sprite"
    export function moveTowards(sprite:Sprite, otherSprite:Sprite, velocity:number=50) {
        let distance = Math.sqrt( Math.pow(sprite.x - otherSprite.x, 2) + Math.pow(sprite.y - otherSprite.y, 2) )
        sprite.vx = velocity * (otherSprite.x - sprite.x) / distance
        sprite.vy = velocity * (otherSprite.y - sprite.y) / distance
    }

    //%block
    //% blockId=cubicbirddisplaSpriteyHitPointBar block="show %sprite=variables_get(mySprite) %x percent of hp"
    //% group="Display"
    export function displaySpriteHitPointBar(sprite: Sprite, x: number) {
        if (!hpManagerSprites.find(element => element === sprite)) {
            hpManagerSprites.push(sprite)
            sprite.onDestroyed(()=> {
                hpManagerSprites.removeElement(sprite)
            })
        }

        sprite.data[CUBICBIRD_HELPER_BLOCKS_SPRITE_HP_DATA_KEY] = x
    }

    game.onShade(function () {
        for (let hpManagedSprite of hpManagerSprites) {

            let hpPercentage = hpManagedSprite.data[CUBICBIRD_HELPER_BLOCKS_SPRITE_HP_DATA_KEY]

            if (hpPercentage > 0) {
                let height = hpManagedSprite.image.height
                let width = hpManagedSprite.image.width
                let barWidth = (width - 2) * hpPercentage/100

                screen.fillRect(hpManagedSprite.x - width / 2 + 1, hpManagedSprite.y - height / 2 - 2, width - 2, 1, 1)
                screen.fillRect(hpManagedSprite.x - width / 2 + 1, hpManagedSprite.y - height / 2 - 2, barWidth, 1, 2)
            }
        }
    })

}