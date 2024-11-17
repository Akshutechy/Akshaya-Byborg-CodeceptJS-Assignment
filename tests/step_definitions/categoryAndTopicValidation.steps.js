const { I } = inject();
const homePage = require('../pages/homePage');
const categoryOrTopicPage = require('../pages/categoryOrTopicPage');
const {expect} = require('chai');

When('User clicks on the {string} button', async (categoryOrTopicName) => {
  await homePage.clickCategoryOrTopic(categoryOrTopicName);
  await categoryOrTopicPage.scrollToBottomPane();
});

Then('User should be displayed with the selected {string}', async (categoryOrTopicName) => {
  expect(await categoryOrTopicPage.getCategoryOrTopicTextCount(categoryOrTopicName)).equal(await categoryOrTopicPage.getPsychicTileCount());
});