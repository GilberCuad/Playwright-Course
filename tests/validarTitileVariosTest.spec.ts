import { expect, test } from "@playwright/test";


test.describe('Navegaciòn de www.freerangetesters.com', () => {
  // añadimos los tittles esperados

  const secciones = [
    { nombre: 'Cursos', url: '/cursos', tituloEsperado: 'Cursos' },
    { nombre: "Udemy", url: '/udemy', tituloEsperado: 'Udemy' },
    { nombre: "Recursos", url: '/recursos', tituloEsperado: 'Recursos' },
    { nombre: "Blog", url: '/blog', tituloEsperado: 'Free Range Testers' },

  ];
  for (const seccion of secciones) {
    test(`validar la redireccion a la seccion "${seccion.nombre}"`, async ({ page }) => {

      await test.step(`Estando en la web principal`, async () => {
        page.goto('https://www.freerangetesters.com');
        await expect(page).toHaveTitle('Free Range Testers');
      });

      await test.step(`Cuando se hace click en "${seccion.nombre}"`, async () => {
        page.locator('#page_header').getByRole('link', { name: seccion.nombre, exact: true }).click();
        await page.waitForURL(`**${seccion.url}`)
      });

      await test.step(`Me lleva a la seccion de titulo "${seccion.tituloEsperado}"`, async () => {
        await expect(page).toHaveTitle(seccion.tituloEsperado);
      })



    })

  }
})

