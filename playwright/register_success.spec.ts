import { test, expect } from '@playwright/test';

const input = {
    username: "admin",
    password: "password",
    firstname: "John",
    lastname: "Wick",
    gender: "Male",
    membershipType: "Premium",
    tnc: true,
};

test('should register successfully', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    await expect(page).toHaveURL('http://localhost:3000/login');
    await page.getByTestId('hpl-register').click();

    await expect(page).toHaveURL('http://localhost:3000/register');
    await page.getByTestId('username').fill(input.username);
    await page.getByTestId('password').fill(input.password);
    await page.getByTestId('firstname').fill(input.firstname);
    await page.getByTestId('lastname').fill(input.lastname);
    await page.getByTestId('gender-male').check();
    await page.getByTestId('membership-type').click();
    await page.getByText(input.membershipType).click();
    await page.getByTestId('terms-cons').check();
    await page.getByTestId('register-submit').click();

    await expect(page).toHaveURL('http://localhost:3000/register/result');
    await expect(page.getByText(`${input.firstname} ${input.lastname}`)).toBeVisible();
    await expect(page.getByText(input.gender)).toBeVisible();
    await expect(page.getByText(input.membershipType)).toBeVisible();
    await expect(page.getByText("Agree")).toBeVisible();
});

test('should login successfully', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    await expect(page).toHaveURL('http://localhost:3000/login');
    await page.getByTestId('username').fill(input.username);
    await page.getByTestId('password').fill(input.password);
    await page.getByTestId('btn-submit').click();

    await expect(page).toHaveURL(`http://localhost:3000/home/${input.username}`);
    await expect(page.getByText(input.username)).toBeVisible();
});


test('should register require field', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    await expect(page).toHaveURL('http://localhost:3000/login');
    await page.getByTestId('hpl-register').click();

    await expect(page).toHaveURL('http://localhost:3000/register');
    await page.getByTestId('register-submit').click();
    await expect(page.getByText("Please input your username!")).toBeVisible();
    await expect(page.getByText("Please input your password!")).toBeVisible();
    await expect(page.getByText("Please input your first name!")).toBeVisible();
    await expect(page.getByText("Please input your last name!")).toBeVisible();
    await expect(page.getByText("Please input your gender!")).toBeVisible();
    await expect(page.getByText("Please select your membership type!")).toBeVisible();
    await expect(page.getByText("Please agree to the terms and conditions!")).toBeVisible();

});

test('should login require field', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    await expect(page).toHaveURL('http://localhost:3000/login');
    await page.getByTestId('btn-submit').click();
    await expect(page.getByText("Please input your username!")).toBeVisible();
    await expect(page.getByText("Please input your password!")).toBeVisible();

});