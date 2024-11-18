const { I } = inject();

/**
 * CategoryOrTopicPage class handles the locators and associated functions related to Category or Topic Page
 */
class CategoryOrTopicPage {
  constructor() {
    this.bottomPane = "//div[@class='page-foot-main page-wrap']",
    this.topicOrCategoryText = (categoryOrTopicName)=>`//div[contains(@class,'thumb-container')]/article/div/div/a[contains(text(),'${categoryOrTopicName}')]`,
    this.psychicTile = "//div[contains(@class,'thumb-container')]/article[contains(@data-type,'performer')]"
  }
  
  /**
     * Scrolls to the bottom of the page
     */
  async scrollToBottomPane(){
    I.scrollTo(this.bottomPane);
  }

  /**
     * Gets the category or topic text count from each Psychic tile in the page
     * @param {string} topicOrCategory - the topic or category name
     * @returns {Promise<number>} - returns the total number of category or topic text count
     */
  async getCategoryOrTopicTextCount(topicOrCategory){
    return await I.grabNumberOfVisibleElements(this.topicOrCategoryText(topicOrCategory));
  }

  /**
     * Gets the Psychic tile count in the page
     * @returns {Promise<number>} - returns the total number of Psychic tile count in the page
     */
  async getPsychicTileCount(){
    return await I.grabNumberOfVisibleElements(this.psychicTile);
  }
}

module.exports = new CategoryOrTopicPage();