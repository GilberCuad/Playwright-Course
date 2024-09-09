import { expect, test } from "@playwright/test";

test.describe('Hoa', () => {
  // data-testid
  // exact: true
  /**
   * esto es para validar que exactamente valide algo:
   *
   * page.getByText("texto", ${exact: true})
   *
   *
   * // PARA VALIDAR ALGO USANDO FILTRADO POR TEXTO SI 2 BOTONES TIENEN EL MISMO NOMBRE Y SOLO SE DESEA VALIDAR EL PRIMERO
   *
   * await page.getByRole('liust').filter({hasText: 'Playstation 5'}).getByRole('button', {name: 'add to cart'}).click();
   *
   * primero se valida el filtro de texto y luego se da clic en ese elemento
   *
   * PODEMOS FILTRAR POR OTRO LACATOR, POR EJEMPLO:
   * 
   * await page.getByRole('liust')
   * .filter({has: page.getByRole('heading', {name: 'Xbox series'})
   * .getByRole('button', {name: 'add to cart'})
   * .click();
   *  En el anterior valida primero el locator antes de realizar la acción 
   * 
   * 
   * PARA VALIDAR QUE SOLO VALIDE ELEMENTOS VSIBLES
   * page.locator('button').locator('visible=true').click();
   * 
   */
})
