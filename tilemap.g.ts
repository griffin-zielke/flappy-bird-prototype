// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`640008000003030404040404030303030103030303030103030303030103030303030103040300030301030303000301000303030306030303030301030303030301030303030301030300030301030303030301030304040301030303030301030303030301020203030300030003050003030401030003030001030300030306030300030301030404030303010003030303010304030003060300030303060303030003010300030303010303030303060003030003010300030400010303000303010300030403010202030303030303000505050004030303030303010304040405060505050303060303040303030103030303030300040404040605030303030603050503030103030305030105030303030603030303030103030305040100040303030103030304050302020303000303030303030305040603030003030103030304000600050504040603000404000301030300030506050300040401050505000306030305050301030303050306050300030306030300030306030303050301030405050506030303030506020200030003030003030300030306030303030306030300040401030500030406030303030303060305050505060303030403010304050503010300040503060303000503060503030304010305050303060303030505060303030305060403030003060202030303030303030404040303010303030303060303040404010305050303010303030303030604000405050103000404030100030305030603030305050603040305050605050500040103030505030603000304030603030300030603030303040602020303030403030304030303030103030303000603040303030103030505030103030300030306030303030001030303030301030303030306030300030506030405000501030305040401030003000401030303040306000303030301030303030001020203000303030300030300030301030300030301030303000301030003050301030003030303010300030303010303030300010303000303010303030303010303000503010300030304010303030304010303030003010303030300010303000303010202`, img`
............2.....2.....2.....2......2.....2...........2.....2.....2.....2.....2.....2.....2.....2.2
............2.....2...........2......2.....2.................2.....2...........2.....2.....2.....2.2
..................2..................2.......................2.....2...........2.....2.....2.......2
..................2..................2...........2...........2.......................2.............2
........................2........................2.....2.................2.........................2
............2...........2.....2............2.....2.......................2.........................2
............2...........2.....2............2.....2.................2.....2.....2...........2.....2.2
............2.....2.....2.....2......2.....2.....2.....2.....2.....2.....2.....2.....2.....2.....2.2
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile2,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
