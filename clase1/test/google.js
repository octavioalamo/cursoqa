var assert = require('assert');
const {By,Key,Builder} = require("selenium-webdriver");
require("geckodriver");

describe('Google navigation', function (){
    this.timeout(50000);

    it('should show the correct title', async function(){
    var searchString = "Automation testing with Selenium and JavaScript";

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("firefox").build();

     //To fetch http://google.com from the browser with our code.
     await driver.get("http://google.com");

     //Accept cookies
     await driver.findElement(By.id("L2AGLb")).click()
         
     //To send a search query by passing the value in searchString.
     await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);

     //Verify the page title and print it
     var title = await driver.getTitle();
     assert.equal(title, 'Este deberia ser el titulo');

     //It is always a safe practice to quit the browser after execution
     await driver.quit();
     return done();
    })
})