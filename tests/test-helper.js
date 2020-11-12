import Application from 'ember-workbox-example/app';
import config from 'ember-workbox-example/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
