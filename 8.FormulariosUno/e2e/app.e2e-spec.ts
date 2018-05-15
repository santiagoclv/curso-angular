import { FormulariosUnoPage } from './app.po';

describe('formularios-uno App', () => {
  let page: FormulariosUnoPage;

  beforeEach(() => {
    page = new FormulariosUnoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
