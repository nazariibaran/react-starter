import { useDispatch, useSelector } from 'react-redux';
import { State } from '@app/redux/state';
import { useEffect } from 'react';
import { getSettings } from '@app/redux/profile';
import { SettingsModel } from '@pages/profile/models';

const useSettingsData = () => {
  const dispatch = useDispatch();
  const { settings } = useSelector((state: State) => state.profile);

  const defaultValues: SettingsModel = {
    notifications: false
  };

  useEffect(() => {
    dispatch(getSettings());
  }, []);

  return {
    defaultValues: settings ? settings : defaultValues
  };
};

export { useSettingsData };
