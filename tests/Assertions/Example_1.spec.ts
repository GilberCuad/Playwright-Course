import { expect, test } from 'playwright/test';

test.describe("Hola test", () => {
  test("Hola test 2", async ({ page }) => {
    await test.step("Subida de archivos", async () => {
      await page.goto(
        "https://thefreerangetester.github.io/sandbox-automation-testing/"
      );
    });

    await test.step('Validaciones', async () => {
      await page.getByLabel('Hamburguesa 🍔').check();

      // vamos a validar que el elemento esté checkeado

      await expect(page.getByLabel("Hamburguesa 🍔")).toBeChecked();

      // validar que el elemento no esté checkeado

      await expect(page.getByLabel("Hamburguesa 🍔")).toBeChecked();

    });


    await test.step('deschekeando del ejemeplo anterior', async () => {
      await page.getByLabel('Hamburguesa 🍔').uncheck();

      // validar que el elemento no esté checkeado

      await expect(page.getByLabel("Hamburguesa 🍔")).not.toBeChecked();

    });


    // haciendo fallar la assercion

    await test.step('fallo del ejemplo anterior', async () => {
      await page.getByLabel('Hamburguesa 🍔').uncheck();

      // validar que el elemento no esté checkeado

      await expect(page.getByLabel("Hamburguesa 🍔"), 'El elemento estaba deschekeado').toBeChecked(); // muestra el mensaje cuando falla <pero> cuando el expect esté fallando

    });
  });
});
