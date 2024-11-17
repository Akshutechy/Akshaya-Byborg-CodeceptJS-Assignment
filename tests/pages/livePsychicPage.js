const { I } = inject();

class LivePsychicPage {
  constructor() {
    this.giftButton = 'div[data-testid="promoCoin"]',
    this.signUpDialogueBox = '.mc_dialog--log_in'
  }

  async clickGiftButton(){
    await I.waitForVisible(this.giftButton)
    await I.click(this.giftButton);
  }

  async getSignUpBoxCount(){
    await I.waitForVisible(this.signUpDialogueBox);
    return await I.grabNumberOfVisibleElements(this.signUpDialogueBox);
  }
}

module.exports = new LivePsychicPage();