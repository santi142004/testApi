
const { productos } = require('./api');

test('La API de Fake Store devuelve datos correctamente', async () => {
  const products = await productos();

  expect(products).toBeDefined();
  expect(Array.isArray(products)).toBe(true);


  expect(products.length).toBeGreaterThan(0);


  products.forEach(product => {
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('title');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('category');
  });
});
