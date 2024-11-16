const { I } = inject();

When('User clicks on the Live Experts button under Session type', async () => {
  I.seeElement('label[for="filter4"]');
  I.click('label[for="filter4"]');
  I.seeElement('//a[contains(text(),"Live Experts")]');
  I.click('//a[contains(text(),"Live Experts")]');
});

Then('User should be displayed with the unique Live Psychics', async () => {
  collectAndVerifyUniqueNames();
  verifyLiveDataStatus();
  verifyProfilePictureExists();
});

async function collectAndVerifyUniqueNames() {
  I.waitForVisible('div.thumb-data-item--name');
  const names = await I.grabTextFromAll('div.thumb-data-item--name');
  const hasDuplicates = names.some((name, index) => names.indexOf(name) !== index);
  expect(!hasDuplicates).equal(true);
}

async function verifyLiveDataStatus() {
  const statuses = await I.grabAttributeFromAll('//article[contains(@class, "thumb thumb--modern")]','data-status');
  const isValid = statuses.every(status=>status!=='0')
  expect(isValid).equal(true);
}

async function verifyProfilePictureExists() {
  const imageSource = await I.grabAttributeFromAll('//article[contains(@class, "thumb thumb--modern")]//img[contains(@class, "thumb-img")]','src');
  const isValid = imageSource.every(src=>src!==null)
  expect(isValid).equal(true);
}