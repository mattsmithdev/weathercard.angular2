import { WeatherCardPage } from './app.po';

describe('weather-card App', function() {
  let page: WeatherCardPage;

  beforeEach(() => {
    page = new WeatherCardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
