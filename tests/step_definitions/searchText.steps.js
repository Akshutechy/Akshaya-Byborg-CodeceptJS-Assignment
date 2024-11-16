const { I } = inject();
const homePage = require('../pages/homePage');

Given('User is on the oranum home page', async() => {
  I.amOnPage('/');
  await homePage.clickAcceptCookies();
});

When('User searches the pshycics with {string} text', async(word) => {
  await homePage.fillTextInExpertOrCategorySearchBar(word);
});

Then('User should be displayed with search results matching the partial searched text {string}', async(word) => {
  const formattedWord = word.charAt(0).toUpperCase()+word.slice(1);
  await homePage.validateSearchResultText(formattedWord);
});

Then('User should be displayed with search results matching specific psychic only {string}', async(word) => {
  await homePage.validateSearchResultText(word);
  await homePage.compareSearchResultCount(1);
});