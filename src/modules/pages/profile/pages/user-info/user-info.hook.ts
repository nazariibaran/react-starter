import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { UserInfoModel } from '@pages/profile/models';
import { State } from '@redux/state';
import { getUserInfo } from '@redux/profile';

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
