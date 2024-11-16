const { I } = inject();

When('User clicks on the {string} button', async (categoryOrTopicName) => {
  selectCategoryOrTopic(categoryOrTopicName);
});

Then('User should be displayed with the selected {string}', async (categoryOrTopicName) => {
  categoryOrTopicCountCheck(categoryOrTopicName);
});

async function selectCategoryOrTopic(categoryOrTopicName){
  I.click(`//a[@class="sidebar-filters-link "][contains(text(),'${categoryOrTopicName}')]`);
  I.scrollTo("//div[@class='page-foot-main page-wrap']");
}

async function categoryOrTopicCountCheck(categoryOrTopicName){
  const topicCount = await I.grabNumberOfVisibleElements(`//div[contains(@class,'thumb-container')]/article/div/div/a[contains(text(),'${categoryOrTopicName}')]`);
  const psychicCount = await I.grabNumberOfVisibleElements("//div[contains(@class,'thumb-container')]/article[contains(@data-type,'performer')]");
  expect(topicCount).equal(psychicCount);
}