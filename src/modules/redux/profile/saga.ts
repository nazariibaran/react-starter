import { Preloaders } from '@app/models';
import { preloaderStart, preloaderStop } from '@redux/ui/preloader';
import { Saga } from 'redux-chill';
import { put } from 'redux-saga/effects';
import { getSecurityInfo, getSettings, getUserInfo } from './actions';

/**
 * profile saga
 */
class ProfileSaga {
  /**
   * Get user info
   */
  @Saga(getUserInfo)
  public *getUserInfo() {
    yield put(preloaderStart(Preloaders.userInfo));
    try {
      const response = {
        name: 'User',
        surname: 'User'
      };
      yield put(getUserInfo.success(response));
    } catch (error) {
      console.log(error);
    } finally {
      yield put(preloaderStop(Preloaders.userInfo));
    }
  }

  /**
   * Get user info
   */
  @Saga(getSecurityInfo)
  public *getSecurityInfo() {
    yield put(preloaderStart(Preloaders.security));
    try {
      const response = {
        email: 'mail@mail.com'
      };
      yield put(getSecurityInfo.success(response));
    } catch (error) {
      console.log(error);
    } finally {
      yield put(preloaderStop(Preloaders.security));
    }
  }

  /**
   * Get user settings
   */
  @Saga(getSettings)
  public *getSettings() {
    yield put(preloaderStart(Preloaders.settings));
    try {
      const response = {
        notifications: false
      };
      yield put(getSettings.success(response));
    } catch (error) {
      console.log(error);
    } finally {
      yield put(preloaderStop(Preloaders.settings));
    }
  }
}

export { ProfileSaga };
