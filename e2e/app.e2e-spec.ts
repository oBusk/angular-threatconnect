import { AngularThreatconnectPage } from './app.po';

describe('angular-threatconnect App', () => {
  let page: AngularThreatconnectPage;

  beforeEach(() => {
    page = new AngularThreatconnectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
