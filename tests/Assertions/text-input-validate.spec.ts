import { expect, test } from 'playwright/test';

test.describe("Hola test", () => {
  test("Hola test 2", async ({ page }) => {
    await test.step("Subida de archivos", async () => {
      await page.goto(
        "https://thefreerangetester.github.io/sandbox-automation-testing/"
      );
    });

    await test.step('Validaciones', async () => {
      // validamos que sea editable
      await expect(page.getByPlaceholder('Ingresá texto')).toBeEditable();
      // luego escribimos
      await page.getByPlaceholder('Ingresá texto').fill('Hola como estas');

      // luego validamos lo que está escrito
      await expect(page.getByPlaceholder("Ingresá texto")).toHaveValue(
        "Hola como estas"
      );
    });

  });
});
