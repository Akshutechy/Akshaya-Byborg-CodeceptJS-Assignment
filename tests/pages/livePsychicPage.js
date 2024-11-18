const { I } = inject();

/**
 * LivePsychicPage class handles the locators and associated functions related to Live Psychic Page
 */
class LivePsychicPage {
  constructor() {
    this.giftButton = 'div[data-testid="promoCoin"]',
    this.signUpDialogueBox = '.mc_dialog--log_in'
  }

  /**
     * Clicks on the Gift button
     */
  async clickGiftButton(){
    await I.waitForVisible(this.giftButton)
    await I.click(this.giftButton);
  }

  /**
     * Gets the number of Sign Up Box count
     *@returns {Promise<number>} - returns the number of signup box count
     */
  async getSignUpBoxCount(){
    await I.waitForVisible(this.signUpDialogueBox);
    return await I.grabNumberOfVisibleElements(this.signUpDialogueBox);
  }
}

module.exports = new LivePsychicPage();