import { combineReducers } from 'redux';
import { ui } from './ui';
import { router } from './router';
import { localization } from '@localization/store';
import { general } from './general';
import { profile } from './profile';

/**
 * App rd
 */
const app = combineReducers({
  router,
  localization,
  general,
  profile,
  ui
});

export { app };
