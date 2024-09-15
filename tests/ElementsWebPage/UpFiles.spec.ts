import { test } from 'playwright/test';

test.describe("Hola test", () => {
  test("Hola test 2", async ({ page }) => {
    await test.step("Subida de archivos", async () => {
      await page.goto(
        "https://thefreerangetester.github.io/sandbox-automation-testing/"
      );

      await page
        .getByLabel("Upload file")
        .setInputFiles("path del archivo.pdf");
      // si son varios:
      await page
        .getByLabel("Upload file")
        .setInputFiles(["path del archivo.pdf", "pathe del archivo.xls"]);
      // para remover los archivos
      await page.getByLabel("Upload file").setInputFiles([]);
    });

    // drag and drop
    await test.step('Drag and drop', async () => {
      await page.getByTestId('darg2').dragTo(page.getByRole('button')); // lo que hace es tomar lo del primer locator y lo lleva al segundo locator
    })



  });
});

