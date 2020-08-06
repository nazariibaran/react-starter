import { useSelector, useDispatch } from 'react-redux';
import { State } from '@app/redux/state';
import { useEffect } from 'react';
import { getSecurityInfo } from '@app/redux/profile';
import { SecurityInfoModel } from '@pages/profile/models';

const useSecurityData = () => {
  const dispatch = useDispatch();
  const { securityInfo } = useSelector((state: State) => state.profile);

  const defaultValues: SecurityInfoModel = {
    email: ''
  };

  useEffect(() => {
    dispatch(getSecurityInfo());
  }, []);

  return {
    defaultValues: securityInfo ? securityInfo : defaultValues
  };
};

export { useSecurityData };
