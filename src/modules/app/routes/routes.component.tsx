import { Toast } from '@core/components';
import { Auth, Home, Profile, Uikit } from '@pages';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import * as styles from './routes.scss';
import { State } from '@redux/state';

/**
 * Renders Routes
 */
const Routes: React.FC = () => {
  const { isToastVisible } = useSelector((state: State) => state.ui.toast);

  return (
    <div className={styles.routes}>
      {isToastVisible && <Toast />}
      <Route path='/profile' component={Profile} />
      <Route path='/auth' component={Auth} />
      <Route path='/uikit' component={Uikit} />
      <Route exact path='/' component={Home} />
    </div>
  );
};
export { Routes };
