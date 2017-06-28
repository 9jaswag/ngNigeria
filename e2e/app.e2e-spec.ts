import { NgNigeriaPage } from './app.po';

describe('ng-nigeria App', () => {
  let page: NgNigeriaPage;

  beforeEach(() => {
    page = new NgNigeriaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
