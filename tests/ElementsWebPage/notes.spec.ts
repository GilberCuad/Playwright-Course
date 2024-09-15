import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // con el siguiente comando, podemos decir que espere hasta que la url cambie a un directorio

  await page.waitForURL('**/cursos')

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // con el siguiente comando, podemos decir que espere hasta que la url cambie a un directorio

  await page.waitForURL('**/cursos')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

// con el comando pw- podemos crear ciertos componentes de forma mas rapida

test.describe('', () => {
  test('', async ({ page }) => {
    await test.step('', async () => {

    })

  })

})

