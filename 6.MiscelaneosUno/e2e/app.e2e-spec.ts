import { MiscelaneosUnoPage } from './app.po';

describe('miscelaneos-uno App', () => {
  let page: MiscelaneosUnoPage;

  beforeEach(() => {
    page = new MiscelaneosUnoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
