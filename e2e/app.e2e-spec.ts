import { FroalaEditorPage } from './app.po';

describe('froala-editor App', () => {
  let page: FroalaEditorPage;

  beforeEach(() => {
    page = new FroalaEditorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
