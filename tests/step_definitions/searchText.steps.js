const { I } = inject();

Given('User is on the oranum home page', async() => {
  I.amOnPage('/');
  I.seeElement('//button[contains(text(), "Accept Cookies")]');
  I.click('//button[contains(text(), "Accept Cookies")]');
});

When('User searches the pshycics with {string} text', (word) => {
  I.seeElement('.toolbar-search-input');
  I.click('.toolbar-search-input');
  I.fillField('.toolbar-search-input', word);
});

Then('User should be displayed with search results matching the partial searched text {string}', (word) => {
  //  Validating the results
  const formattedWord = word.charAt(0).toUpperCase()+word.slice(1);
  I.see(formattedWord, 'ul.autosuggest .toolbar-autosuggest-suggestion');
});

Then('User should be displayed with search results matching specific psychic only {string}', (word) => {
  //  Validating the results
  I.see(word, 'ul.autosuggest .toolbar-autosuggest-suggestion');
  I.seeNumberOfElements('li.toolbar-autosuggest-row',1)
});