import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('protractor test App', () => {
  let page: AppPage;

  beforeEach(() => {
    //return browser.get('http://localhost:4202/login');
  });

  /*it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });*/

  it('new user registration', function() {
  	browser.get('http://protractor-demo-app.herokuapp.com/register');
    element(by.id('firstName')).sendKeys('nithinkumar');
    element(by.id('lastName')).sendKeys('123456');
    element(by.id('userName')).sendKeys('nithin');
    element(by.id('pwd')).sendKeys('123456');
    element(by.css('.btn-register')).click();
  });

  it('positive scenario of login credentials', function() {
    element(by.id('form-username')).sendKeys('nithin');
    element(by.id('form-pass')).sendKeys('123456');
    element(by.css('.btn-login')).click();
    browser.driver.wait(function() {
      browser.driver.getCurrentUrl().then(function(url) {
      	console.log(url);
		//expect(url).toEqual('http://localhost:4202/');
      });
    });
  });
});
