db.inventory.deleteMany({})

db.inventory.insertOne(
    { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
 )
 db.inventory.insertOne(
    { item: "folder", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
 )
 db.inventory.deleteMany({})

 db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
 ]);
 
 /*
 insertmany es una raid de documentos
 una raid son valores separados por "," (en este ejemplo separa documetos que tienen campo valor) 
 */

 db.inventory.insertMany([ { _id: 1, item: { name: "ab", code: "123" }, qty: 15, tags: [ "A", "B", "C" ] },
    { _id: 2, item: { name: "cd", code: "123" }, qty: 20, tags: [ "B" ] },
    { _id: 3, item: { name: "ij", code: "456" }, qty: 25, tags: [ "A", "B" ] },
    { _id: 4, item: { name: "xy", code: "456" }, qty: 30, tags: [ "B", "A" ] },
    { _id: 5, item: { name: "mn", code: "000" }, qty: 20, tags: [ [ "A", "B" ], "C" ] }
 ]);

 /*
para subir esta linea de comando lo subo con insertemany y separo cada documento con ,
"_id" te lo coloca mongo, si no lo creo me lo coloca
"item" es un capo de tipo documento por que se le añadeun documento
"qty" se le añade un entero
"tags" se le añade una rayd
*/

