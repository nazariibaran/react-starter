import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getSecurityInfo } from '@redux/profile';
import { State } from '@redux/state';
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
