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
            case "level1":return tiles.createTilemap(hex`96000800000303040404040403030303010303030303010303030303010303030303010304030003030103030300030100030303030603030303030103030303030103030303030103030003030103030303030103030404030103030303030103030303030104040400040105050500050100040403030103040404040104040004040104040405040104040400030100040403040001020202030303000300030500030304010300030300010303000303060303000303010304040303030100030303030103040300030603000303030603030300030103000303030103030303030600030300030103000304000103030003030103000304030104040404040103000303030105030004040604000303000103030303040605000005030100050404040104040404040401040202030303030303000505050004030303030303010304040405060505050303060303040303030103030303030300040404040605030303030603050503030103030305030105030303030603030303030103030305040100040303030103030304050604030303030100050404000603050503030604030303030103050004000603030505030103030300030100050300040004020202030300030303030303030504060303000303010303030400060005050404060300040400030103030003050605030004040105050500030603030505030103030305030605030003030603030003030603030305030103040505050603030303050603030004030103030400030604000300030600030303050105040505050603030305000103030305050605050303030206020202000300030300030303000303060303030303060303000404010305000304060303030303030603050505050603030304030103040505030103000405030603030005030605030303040103050503030603030305050603030303050604030300030600040404030605050504030605030303050104040300050604050505000103000503040600030503030603030503020206020202030303030303030404040303010303030303060303040404010305050303010303030303030604000405050103000404030100030305030603030305050603040305050605050500040103030505030603000304030603030300030603030303030104040404000600030304030103030003050104000404040605000303030103040400030604040003000603000505000306040202030303040303030403030303010303030300060304030303010303050503010303030003030603030303000103030303030103030303030603030003050603040500050103030504040103000300040103030304030600030303030103030303000104030404030603030404000100030305030105050503030603030003040105040505030603030404040104040404020401000202030003030303000303000303010303000303010303030003010300030503010300030303030103000303030103030303000103030003030103030303030103030005030103000303040103030303040103030300030103030303000103030303030103000300040104000403030103030505000103030003030103000404040104040005050105000505050103030303040401020302`, img`
............2.....2.....2.....2......2.....2...........2.....2.....2.....2.....2.....2.....2.....2.....2.....2.....2.....2.....2.....2.....2......2..2
............2.....2...........2......2.....2.................2.....2...........2.....2.....2.....2.....2.....2...........2...........2.....2......2..2
..................2..................2.......................2.....2...........2.....2.....2...........2.................2...........2.....2.........2
..................2..................2...........2...........2.......................2.................2.................2...........2...............2
........................2........................2.....2.................2.........................................2...........2.....................2
............2...........2.....2............2.....2.......................2.......................2...........2.....2...........2.....................2
............2...........2.....2............2.....2.................2.....2.....2...........2.....2...........2.....2...........2...........2......2..2
............2.....2.....2.....2......2.....2.....2.....2.....2.....2.....2.....2.....2.....2.....2.....2.....2.....2.....2.....2.....2.....2......2..2
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
