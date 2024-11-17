const { I } = inject();
const homePage = require('../pages/homePage');
const livePsychicPage = require('../pages/livePsychicPage');
const {expect} = require('chai');

When('User opens the live pshycic', async () => {
  await homePage.selectLivePsychic();
});

When('User clicks on gift inside button', async () => {
  await livePsychicPage.clickGiftButton();
});

Then('User should be displayed with sign up overlay box', async () => {
  expect(await livePsychicPage.getSignUpBoxCount()).equal(1);
});