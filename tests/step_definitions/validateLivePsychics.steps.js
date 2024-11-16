const { I } = inject();
const homePage = require('../pages/homePage');
const liveExpertPage = require('../pages/liveExpertsPage');
const {expect} = require('chai');

When('User clicks on the Live Experts button under Session type', async () => {
  await homePage.clickSessionType();
  await homePage.clickLiveExpertsButton();
});

Then('User should be displayed with the unique Live Psychics', async () => {
 expect(await liveExpertPage.isPsychicNamesUnique()).equal(true);
 expect(await liveExpertPage.isPsychicLive()).equal(true);
 expect(await liveExpertPage.isProfilePictureExists()).equal(true);
});