export { userReducer, userActions } from './model/slice/userSlice';
export type { UserSchema, User } from './model/types/user';
export { UserRole } from './model/consts/userConsts';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/roleSelector';
