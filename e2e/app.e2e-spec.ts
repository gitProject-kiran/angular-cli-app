import { AngularCliAppPage } from './app.po';

describe('angular-cli-app App', () => {
  let page: AngularCliAppPage;

  beforeEach(() => {
    page = new AngularCliAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
