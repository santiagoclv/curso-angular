import { Auth0AppPage } from './app.po';

describe('auth0-app App', () => {
  let page: Auth0AppPage;

  beforeEach(() => {
    page = new Auth0AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
