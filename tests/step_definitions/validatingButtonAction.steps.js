const { I } = inject();

When('User opens the live pshycic', async () => {
  const psychicCount = await I.grabNumberOfVisibleElements("//div[@class='swiper-wrapper']/article");

  for (let i = 1; i <= psychicCount; i++) {
    const psychicLiveStatus = await I.grabAttributeFrom(`//div[@class='swiper-wrapper']/article[${i}]`, 'data-status');
    if (psychicLiveStatus == 1) {
      const tileButton = `//div[@class='swiper-wrapper']/article[${i}]/a`;
      I.click(tileButton);
      break;
    }
  }
});

When('User clicks on gift inside button', async () => {
  I.waitForElement('div[data-testid="promoCoin"]')
  I.click('div[data-testid="promoCoin"]');
});

Then('User should be displayed with sign up overlay box', async () => {
  I.seeElement('.mc_dialog--log_in');
});