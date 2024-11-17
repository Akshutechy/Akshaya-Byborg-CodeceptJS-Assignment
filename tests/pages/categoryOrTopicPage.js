const { I } = inject();

class CategoryOrTopicPage {
  constructor() {
    this.bottomPane = "//div[@class='page-foot-main page-wrap']",
    this.topicOrCategoryText = (categoryOrTopicName)=>`//div[contains(@class,'thumb-container')]/article/div/div/a[contains(text(),'${categoryOrTopicName}')]`,
    this.psychicTile = "//div[contains(@class,'thumb-container')]/article[contains(@data-type,'performer')]"

  }
  
  async scrollToBottomPane(){
    I.scrollTo(this.bottomPane);
  }

  async getCategoryOrTopicTextCount(topicOrCategory){
    return await I.grabNumberOfVisibleElements(this.topicOrCategoryText(topicOrCategory));
  }

  async getPsychicTileCount(){
    return await I.grabNumberOfVisibleElements(this.psychicTile);
  }
}

// For inheritance
module.exports = new CategoryOrTopicPage();
