// @ts-check
import { test, expect } from '@playwright/test'

const CAT_PREFIX = `https://cataas.com/`
const LOCALHOST_URL = "http://localhost:5173/"

test('App show random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  // Expect a title "to contain" a substring.
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX)).toBeTruthy()
});

