import { expect, test } from "@playwright/test";

test("contacts page has list of contacts", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("list").getByRole("link")).toHaveText([
        "Chip Smith",
        "Randy Horn",
        "Zane High",
    ]);
});
