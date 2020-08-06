import { make } from 'redux-chill';
import { ToastModel } from '@app/redux/ui/models';

/**
 * Toggle toast
 */
const toggleToast = make('[ui] toggle toast')
  .stage((payload: ToastModel) => payload)
  .stage('hide');

export { toggleToast };
