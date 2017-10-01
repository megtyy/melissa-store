
QUnit.test( "Product entity returns the right attribute values", function( assert ) {
  
  var product = new Product({
  	name: "Like Mother", 
  	description: "This is a nice doll.", 
  	size: 50, 
  	color: "blonde", 
  	price: 200
  });

  assert.equal(product.name(), "Like Mother");
  assert.equal(product.description(), "This is a nice doll.");
  assert.equal(product.size(), 50);
  assert.equal(product.color(), "blonde");
  assert.equal(product.price(), 200);
  //tax should be 10% of price
  assert.equal(product.tax(), 20);
});


QUnit.test( "Test for contact", function( assert ) {
  
  var contact = new Contact({
    name: "Melissa",
    email: "meli@mail.com",  
  	hear: "yes", 
  	visit: "maybe", 
  	comments: "nice", 
  	signup: "yes"
  });

  assert.equal(contact.name(), "Melissa");
  assert.equal(contact.email(), "meli@mail.com");
  assert.equal(contact.hear(), "yes");
  assert.equal(contact.visit(), "maybe");
  assert.equal(contact.comments(), "nice");
  assert.equal(contact.signup(), "yes");
});

QUnit.test( "Catalog test", function( assert ) {
  
  var product1 = new Product({
  	name: "Like Mother", 
  	description: "This is a nice doll.", 
  	size: 50, 
  	color: "blonde", 
  	price: 200
  });

  var product2 = new Product({
  	name: "Strawberry Pink Doll", 
  	description: "This is a nice doll.", 
  	size: 60, 
  	color: "red", 
  	price: 100
  });

  var catalog = new Catalog();
  catalog.addProduct(product1);
  catalog.addProduct(product2);

  var length = catalog.length();
  var product2b = catalog.get(1);

  assert.equal(length, 2);
  assert.equal(product2b, product2);
  
});

QUnit.test( "LineItem test", function( assert ) {
  
  var product1 = new Product({
  	name: "Like Mother", 
  	description: "This is a nice doll.", 
  	size: 50, 
  	color: "blonde", 
  	price: 200
  });

  var lineitem = new LineItem({
    product: product1,
    quantity: 3
  });
  
  assert.equal(product1, lineitem.product());
  assert.equal(3, lineitem.quantity());
  assert.equal(600, lineitem.subtotal());

});

QUnit.test( "Cart test", function( assert ) {
  
  var product1 = new Product({
  	name: "Like Mother", 
  	description: "This is a nice doll.", 
  	size: 50, 
  	color: "blonde", 
  	price: 200
  });

  var product2 = new Product({
  	name: "Strawberry Pink Doll", 
  	description: "This is a nice doll.", 
  	size: 60, 
  	color: "red", 
  	price: 100
  });

  var lineitem1 = new LineItem({
    product: product1,
    quantity: 3
  });

  var lineitem2 = new LineItem({
    product: product2,
    quantity: 2
  });
 
  var cart = new Cart();
  cart.addLineItem (lineitem1);
  cart.addLineItem (lineitem2);

  
  assert.equal(2,cart.length());
  assert.equal(lineitem1,cart.get(0));
  assert.equal(800,cart.total());
});
