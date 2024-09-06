describe('Покупка покемонов', function () {

    it('Тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/login/'); // зашла на сайт
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // ввела логин
         cy.get('#password').type('USER_PASSWORD'); // ввела пароль
         cy.get('.auth__button').click(); // нажала войти
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // нажала на свой аватар
         cy.get('[href="/shop"] > .history-info').click(); // нажала на кнопку смена аватара
         cy.get('.available > button').first().click({ force: true }); // кликаю Купить у первого доступного аватара
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111') // ввожу номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1224') // ввожу срок действия карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125') // ввожу код
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Natalya Chenchenko') // ввожу ФИО
         cy.get('.pay-btn').click(); // нажала оплатить   
         cy.get('#cardnumber').type('56456') // ввожу код из смс
         cy.get('.payment__submit-button').click(); // нажала на кнопку отправить
         cy.contains('Покупка прошла успешно').should('be.visible'); // проверила наличие и видимость сообщения о успешной покупке     

     })
 
 })