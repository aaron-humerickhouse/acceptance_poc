import { Selector } from 'testcafe';

fixture `Example Layer`
    .page `http://0.0.0.0:8080/src/layered_testing.html`;

test('Should Fail', async t => {
    // Test code
    await t
        .click('#button')
        .expect(Selector('#clicked-header').innerText).eql('Button was successfully clicked');
});

