describe('eMag.ro', () => {

    it('should have the correct page title', async () => {
        await browser.url('https://www.emag.ro/');
        await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată');
        //! acest test ne va da valoarea pass sau fail la titlul pagini
    }); //! tip* greseste ceva din titlu pentru a observa eroarea.

    it('should select TV, Audio-Video, Gaming... button ', async () => {
        const linkTvPage = await $('//*[@id="auxiliary"]/div/div/ul[2]/li[2]'); 
        await expect(linkTvPage).toBeDisplayed();
        //! incearca sa strici clasa sa vezi daca testul pica asteptarile
        await linkTvPage.click(); // Home Page | class
    }); 
    
    it('should contain a back to home button ', async () => {
        const homePage = await $('.header-back'); 
        await expect(homePage).toBeDisplayed();
        //! incearca sa strici clasa sa vezi daca testul pica asteptarile
        await homePage.click(); // Home Page | class
    });

    it('should contain content, title page', async () => {
        const  geniusTitle = await $('[title="Genius"]')
        const geniusButton = await $('//*[@id="auxiliary"]/div/div/ul[2]/li[1]');
        await geniusButton.click(); //Genius page  | XPath
    });
    it('should have a fully functional search bar', async () => {
        const searchBox = await $('#searchboxTrigger'); //id
        const searchButton = await $('.searchbox-submit-button'); // class

        await searchBox.setValue('casti apple');
        //! setam o valoare [setValue();] care va fi introdusa in bara de cautare
        await searchButton.click();

        await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată');
     })
});

//! run in console: npm test



