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


