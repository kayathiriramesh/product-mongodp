// Find all the information about each products

db.productlists.find()

//Find the product price which are between 400 to 800

db.productlists.find({product_price:{$gt:400,$lt:800}})

//Find the product price which are not between 400 to 600

db.productlists.find({product_price:{$not:{$gt:400,$lt:600}}})

//List the four product which are grater than 500 in price

db.productlists.find({product_price:{$gt:500}}).limit(4)

//Find the product name and product material of each products

db.productlists.find({},{product_name:1,product_material:1})

//Find the product with a row id of 10
 
db.productlists.find({id:'10'})

//Find only the product name and product material

db.productlists.find({},{_id:0,id:0,product_price:0,product_color:0})

//Find all products which contain the value of soft in product material

db.productlists.find({product_material: "soft"})

//Find products which contain product color indigo  and product price 492.00

db.productlists.find({$and:[{product_price:492},{product_color : "indigo"}]})