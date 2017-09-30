
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