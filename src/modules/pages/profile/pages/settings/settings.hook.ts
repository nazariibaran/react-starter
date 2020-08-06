import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { SettingsModel } from '@pages/profile/models';
import { getSettings } from '@redux/profile';
import { State } from '@redux/state';

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
