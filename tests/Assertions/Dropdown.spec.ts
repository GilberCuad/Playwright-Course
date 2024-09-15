import { expect, test } from 'playwright/test';

test.describe("Hola test", () => {
  test("Hola test 2", async ({ page }) => {
    await test.step("Subida de archivos", async () => {
      await page.goto(
        "https://thefreerangetester.github.io/sandbox-automation-testing/"
      );
    });

    await test.step('Validaciones', async () => {
      // vlidar los elementos que contiene un select-
      const deports = ['Fútbol', 'Tennis', 'Basketball', 'boleibol']

      for (let opcion of deports) {
        const element = await page.$(
          `select#formBasicSelect > option:is(:text("${opcion}"))` // decimos que es un select, luego le pasamos los elementos desde la lista con la iteracion
        );
        element ? console.log(`la opcion ${opcion} presente`) : console.log(`La opción ${opcion} No está presente`);
      }
    });

  });
});