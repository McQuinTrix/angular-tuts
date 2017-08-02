import { ProjectFoodPage } from './app.po';

describe('project-food App', () => {
  let page: ProjectFoodPage;

  beforeEach(() => {
    page = new ProjectFoodPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
