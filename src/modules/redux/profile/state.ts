import {
  UserInfoModel,
  SecurityInfoModel,
  SettingsModel
} from 'src/modules/pages/profile/models';

/**
 * profile state
 */
class ProfileState {
  /**
   * User info
   */
  public userInfo: UserInfoModel = null;
  /**
   * User security
   */
  public securityInfo: SecurityInfoModel = null;
  /**
   * User settings
   */
  public settings: SettingsModel = null;
}

export { ProfileState };
