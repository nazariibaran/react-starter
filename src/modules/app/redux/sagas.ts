import { RouterSaga } from './router';
import { LocalizationSaga } from '@localization/store';
import { GeneralSaga } from './general';
import { ToastSaga } from './ui/toast';
import { ProfileSaga } from './profile';

/**
 * App sagas
 */
const sagas = [
  new LocalizationSaga(),
  new RouterSaga(),
  new GeneralSaga(),
  new ToastSaga(),
  new ProfileSaga()
];

export { sagas };
