import { LylPage } from './app.po';

describe('lyl App', () => {
  let page: LylPage;

  beforeEach(() => {
    page = new LylPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
