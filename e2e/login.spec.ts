import { test, expect } from "@playwright/test";

test("Login with success", async ({ page }) => {
  await page.goto("/login");

  const user = {
    name: "henriquekc",
    password: "pwd123",
  };

  await page.locator("#username").fill(user.name);
  await page.locator("#password").fill(user.password);
  await page.locator('button[type="submit"]').click();

  const welcomeMessage = await page.getByRole("heading", {
    name: "Olá, Henrique!",
  });

  await expect(welcomeMessage).toBeVisible();
});
