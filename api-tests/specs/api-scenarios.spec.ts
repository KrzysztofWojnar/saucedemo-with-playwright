// import { expect } from '@playwright/test';
import { test } from '../fixtures';
import { expect } from '@playwright/test';
import { Products } from '../models/products';

test.describe('REST API Scenarios', () => {
  test('Get all products', async ({ productsController }) => {
    const allProductsResponse =
      await test.step('Get a list of all products', async () =>
        productsController.getProducts('all'));
    const allProducts =
      await test.step('Validate that request was successful', async () => {
        expect(allProductsResponse).toBeOK();
        const responseBody = await allProductsResponse.json();
        const allProducts = Products.parse(responseBody);
        expect(allProducts.limit).toBe(allProducts.total);
        return allProducts;
      });
    test.step('Print titles of products with odd ID numbers to console or to test report', () => {
      const isOddId = (product: { id: number }) => product.id % 2;
      allProducts.products
        .filter(isOddId)
        .forEach(product => console.log(product.title));
    });
  });
});
