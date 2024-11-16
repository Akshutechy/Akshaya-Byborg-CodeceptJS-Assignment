const { I } = inject();

class HomePage {
  constructor() {
    this.acceptCookiesButton = '//button[contains(text(), "Accept Cookies")]',
    this.expertOrCategorySearchBar = '.toolbar-search-input',
    this.categoryOrTopicButton = (categoryOrTopicName)=> `//a[@class="sidebar-filters-link "][contains(text(),'${categoryOrTopicName}')]`,
    this.sessionTypeButton = 'label[for="filter4"]',
    this.liveExpertsButton = '//a[contains(text(),"Live Experts")]',
    this.searchResultText = 'ul.autosuggest .toolbar-autosuggest-suggestion',
    this.searchResultCount = 'li.toolbar-autosuggest-row'
  }
  // insert your methods here
  async clickAcceptCookies(){
    await I.waitForVisible(this.acceptCookiesButton);
    await I.click(this.acceptCookiesButton);
  }

  async fillTextInExpertOrCategorySearchBar(textToEnter){
    await I.waitForVisible(this.expertOrCategorySearchBar);
    await I.click(this.expertOrCategorySearchBar);
    await I.fillField(this.expertOrCategorySearchBar, textToEnter);
  }

  async clickCategoryOrTopic(categoryOrTopicText){
    await I.waitForVisible(this.categoryOrTopicButton(categoryOrTopicText));
    await I.click(this.categoryOrTopicButton(categoryOrTopicText));
  }

  async clickSessionType(){
    await I.waitForVisible(this.sessionTypeButton);
    await I.click(this.sessionTypeButton);
  }

  async clickLiveExpertsButton(){
    await I.waitForVisible(this.liveExpertsButton);
    await I.click(this.liveExpertsButton);
  }

  async validateSearchResultText(inputText){
    await I.see(inputText, this.searchResultText);
  }

  async compareSearchResultCount(expectedElementCount){
    await I.seeNumberOfElements(this.searchResultCount,expectedElementCount);
  }


}

// For inheritance
module.exports = new HomePage();
