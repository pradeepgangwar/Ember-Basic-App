import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('should show rentals as home page', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });

  test('should link to information about company', async function(assert) {
    await visit('/');

    await click('.menu-about');
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to contact page of company', async function(assert) {
    await visit('/');

    await click('.menu-contact');
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});
