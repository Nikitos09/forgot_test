// @flow
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthRoute from "./../../../components/routers/AuthRoute";
import SignIn from "./../../../features/auth_signin";
import Forgot from "./../../../features/forgot";
import ResetPassword from "./../../../features/resetPassword";

export default (): React.Node => {
  return (
    <Switch>
      <AuthRoute exact path="/auth/signin" component={SignIn} />
      <Route exact path="/auth/forgot" component={Forgot} />
      <Route exact path="/auth/resetPassword" component={ResetPassword} />
    </Switch>
  );
};