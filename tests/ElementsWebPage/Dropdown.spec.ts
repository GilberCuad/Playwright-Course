import { test } from 'playwright/test';

test.describe('test with dropdown', () => {
  test('test of click', async ({ page }) => {
    await page.goto(
      "https://thefreerangetester.github.io/sandbox-automation-testing/"
    );
    await test.step("haciendo click (deportes)", async () => {
      await page.getByLabel("Dropdown").selectOption('Fútbol');
    });

    await test.step('click in days', async () => {
      // await page.getByRole('button', { name: 'Día de la semana' }).selectOption('Martes'); >> debemos inspeccionar muy bien para saber que es select o no
      await page.getByRole('button', { name: 'Día de la semana' }).click();
      await page.getByRole('link', { name: 'Martes' }).click();
    });

    await test.step('Escriendo de manera mas chevere :v', async () => {
      await page.getByPlaceholder('Ingresá texto').pressSequentially('Hola como estas'); // simula que está escribiendo tecla por tecla
    });

    await test.step('Simular tecla enter', async () => {
      await page.getByPlaceholder('Ingresá texto').press('Enter'); // simula que está escribiendo tecla por tecla
    });


  })

})
