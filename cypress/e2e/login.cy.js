describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашла на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввела верный логин
         cy.get('#pass').type('iLoveqastudio1'); //ввела верный пароль
         cy.get('#loginButton').click(); // нажала на кнопку войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
 
     })
     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашла на сайт
        cy.get('#forgotEmailButton').click(); // нажала на кнопку Забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввела почту для восстановления
        cy.get('#restoreEmailButton').click(); // нажала на кнопку Отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

    })
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашла на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввела верный логин
        cy.get('#pass').type('iLoveqastudio2'); //ввела неверный пароль
        cy.get('#loginButton').click(); // нажала на кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

    })
    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашла на сайт
        cy.get('#mail').type('natka1806@yandex.ru'); // ввела неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввела верный пароль
        cy.get('#loginButton').click(); // нажала на кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

    })
    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // зашла на сайт
        cy.get('#mail').type('germandolnikov.ru'); // ввела логин без @
        cy.get('#pass').type('iLoveqastudio1'); //ввела верный пароль
        cy.get('#loginButton').click(); // нажала на кнопку войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

    })
    it('Логин строчными буквами и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашла на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввела логин со строчными буквами
        cy.get('#pass').type('iLoveqastudio1'); //ввела верный пароль
        cy.get('#loginButton').click(); // нажала на кнопку войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

    })
 
 })