import { State } from '@app/redux/state';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserInfo } from '@app/redux/profile';
import { UserInfoModel } from '@pages/profile/models';

const useUserInfoData = () => {
  const { userInfo } = useSelector((state: State) => state.profile);
  const dispatch = useDispatch();

  const defaultValues: UserInfoModel = {
    name: '',
    surname: ''
  };

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return {
    defaultValues: userInfo ? userInfo : defaultValues
  };
};

export { useUserInfoData };
