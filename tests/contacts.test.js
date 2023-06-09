import { expect, test } from "@playwright/test";

test("contacts page has list of contacts", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("list").getByRole("link")).toHaveText([
        "Chip Smith",
        "Randy Horn",
        "Zane High",
    ]);
});

test("contacts page can show contact details", async ({ page }) => {
    await page.goto("/");
    await page
        .getByRole("list")
        .getByRole("link", { name: "Randy Horn" })
        .click();

    await expect(page.getByRole("textbox", { name: "name" })).toHaveValue(
        "Randy Horn"
    );
});
