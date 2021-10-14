/*
los que tienen el valor de "canvas" en el campo item
*/
db.inventory.find( { item:"canvas" } )

/*
hacer la misma consulta usando el operador $eq
*/
db.inventory.find( { item:{ $eq:"canvas" } } )


/*
este comando encuentra aqueyo que el camopo qty sea igual a 20
*/
db.inventory.find( { qty: { $eq: 20 } } )
/*
{ "_id" : 2, "item" : { "name" : "cd", "code" : "123" }, "qty" : 20, "tags" : [ "B" ] }
{ "_id" : 5, "item" : { "name" : "mn", "code" : "000" }, "qty" : 20, "tags" : [ [ "A", "B" ], "C" ] }
*/

/*
para que me encuentre por ejemplo code que esta dentro de item
*/
db.inventory.find( { "item.code": "123" } )
db.inventory.find( { "item.code": {$eq:"123"} } )
