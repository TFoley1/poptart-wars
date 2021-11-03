// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`140014000702020202020202020202020202020202020208010909090909090909090909090909090b03090301090a0909090a0909090909090909090b03090301090909090909090909090a090909090b030903010909090909090909090909090909090b030903010a09090909090909090909090909090b030903010909090909090909090909090909090b030903010909070202020202020202020202020d030903010909010c0404040404040404040404040509030109090103090a09090909090a090909090909030109090103090a09090909090a090909090909030109090103090a09090909090a090909090909030109090103090a09090909090a09090909090903010909060509090a0a0a0a0a09090a090909090301090909090909090909090909090909090909030109090a0a0909090a090909090909090909090301090a0708090909090a090909090a0909090903010909010309090909090909090909090909090301090901030909090909090909090909090909030604040103040404040404040404040404040405`, img`
22222222222222222222
2...............22.2
2...............22.2
2...............22.2
2...............22.2
2...............22.2
2...............22.2
2..222222222222222.2
2..222222222222222.2
2..22..............2
2..22..............2
2..22..............2
2..22..............2
2..22..............2
2..................2
2..................2
2..22..............2
2..22..............2
2..22..............2
22222222222222222222
`, [myTiles.transparency16,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthEast], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
