// @flow
import * as React from 'react';
import { Switch } from 'react-router-dom';
import AuthRoute from "./../../../components/routers/AuthRoute";
import ForgotRoute from "./../../../components/routers/ForgotRoute";
import ResetPasswordRoute from "./../../../components/routers/ResetPasswordRoute";
import SignIn from "./../../../features/auth_signin";
import Forgot from "./../../../features/forgot";
import ResetPassword from "./../../../features/resetPassword";

export default (): React.Node => {
  return (
    <Switch>
      <AuthRoute exact path="/auth/signin" component={SignIn} />
      <ForgotRoute exact path="/auth/forgot" component={Forgot} />
      <ResetPasswordRoute exact path="/auth/resetPassword" component={ResetPassword} />
    </Switch>
  );
};