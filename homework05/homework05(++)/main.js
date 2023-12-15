const products = [
    { id: 1, name: "Pen", price: 10, category_id: 1 },
    { id: 2, name: "Pencil", price: 20, category_id: 1 },
    { id: 3, name: "Ruler", price: 30, category_id: 2 },
    { id: 4, name: "Rubber", price: 40, category_id: 2 },
    { id: 5, name: "Cutter", price: 40, category_id: 3 }
  ];
  
  const categories = [
    { id: 1, name: "Writing" },
    { id: 2, name: "Support writing" }
  ];
  
  // Function to get products for a specific category
  const getProductsForCategory = (categoryId) => {
    return products
      .filter(product => product.category_id === categoryId)
      .map(({ id: product_id, name, price }) => ({ product_id, name, price }));
  };
  
  // Create the expected result array
  const expectedResult = categories.map(({ id, name }) => ({
    id,
    name,
    products: getProductsForCategory(id)
  }));
  
  console.log(expectedResult);
  