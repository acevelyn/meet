
// Feature 2: Show/hide an event details
// Scenario 1: An event element is collapsed by default.
// Scenario 2: User can expand an event to see its details.
// Scenario 3: User can collapse an event to hide its details.

import puppeteer from 'puppeteer';

// Scenario 1: An event element is collapsed by default.
describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
      jest.setTimeout(30000);
      browser = await puppeteer.launch({
        headless: false,
        slowMo: 250,
        ignoreDefaultArgs: ['--disable-extensions']
      });
      page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.Event');
    });
    afterAll(() => {
        browser.close(); // Close the Browswer
    })
    test('an event element is collapsed by default', async () => {
        const eventDetails = await page.$('.Event .more-details');
        expect(eventDetails).toBeNull();
    })
    // Scenario 2: User can expand an event to see its details.
    test('User can expand event to see its details', async () => {

        await page.click('.Event .toggleEvent')
        const eventDetails = await page.$('.Event .more-details');
        expect(eventDetails).toBeDefined();
    })
    // Scenario 3: User can collapse an event to hide its details.
    test('User can collapse an event to hide its details', async() => {

        await page.click('.Event .toggleEvent');
        const eventDetails = await page.$('.Event .more-details');
        expect(eventDetails).toBeNull();
    });





});

