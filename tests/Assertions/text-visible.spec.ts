import { expect, test } from 'playwright/test';

test.describe("Hola test", () => {
  test("Hola test 2", async ({ page }) => {
    await test.step("Subida de archivos", async () => {
      await page.goto(
        "https://thefreerangetester.github.io/sandbox-automation-testing/"
      );
    });

    await test.step('Validaciones', async () => {
      await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click();

      await page.waitForTimeout(3000);
      // realizamos la assertion

      await expect(page.getByText('OMG, aparezco después de 3 segundos de haber hecho click en el botón 👻.')).toContainText('OMG, aparezco después de 3 segundos de haber hecho click en el botón 👻.')

    });

  });
});
