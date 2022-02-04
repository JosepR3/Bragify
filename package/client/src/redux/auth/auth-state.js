const initialState = {
  isSigningUp: false,
  signUpError: null,
  isSigningOut: false,
  signOutError: null,
  isAuthenticated: false,
  isSendingPasswordReset: false,
  isLoading: false,
  isEditing: false,
  editSuccess: false,
  editMessage: null,
  passwordResetError: null,
  passwordResetSent: false,
  currentUser: {
    email: null,
    username: null,
    firstName: null,
    lastName: null,
  },
};

export default initialState;
