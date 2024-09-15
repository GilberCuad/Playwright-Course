import { test, Browser, Page, expect } from "@playwright/test";

test.describe("Test hacer clic", () => {
  let browser: Browser;
  let page: Page;

  test("Hola clic eb sabdbox", async ({ page }) => {
    await test.step('haciendo clic', async () => {
      await page.goto(
        "https://thefreerangetester.github.io/sandbox-automation-testing/"
      );
    });

    await test.step('haciendo clic en el  boton', async () => {
      await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click();

      // para realizar un doble clic:

      await page.getByRole('button', { name: 'Hacé click para generar un ID' }).dblclick();

      // realizar un clic derecho:

      await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click({ button: 'right' });

      // clic sosteniendo una tecla

      await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click({ modifiers: ['Shift'] });

      // para realizar un hover

      await page.getByRole('button', { name: 'Hacé click para generar un ID' }).hover();

    });

    await page.waitForTimeout(4000);

    await test.step('realizando asertion', async () => {
      await expect(page.getByText('OMG, aparezco después de 3')).toHaveText('OMG, aparezco después de 3 segundos de haber hecho click en el botón 👻.')
    })

    await test.step('rellenando un campo de texto', async () => {
      await page.getByPlaceholder('Ingresá texto').fill("Hoka estoy ingresando texto, i'm embarazed")
    });

    await test.step('checkeando', async () => {
      await page.getByLabel('Pizza 🍕').check(); // uncheck() <> deseleccionar
      await page.getByLabel('Si').check();
    })



  });
});
