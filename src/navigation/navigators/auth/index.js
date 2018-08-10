// @flow
import * as React from 'react';
import { Switch } from 'react-router-dom';
import AuthRoute from "./../../../components/routers/AuthRoute";
import ForgotRoute from "./../../../components/routers/ForgotRoute";
import SignIn from "./../../../features/auth_signin";
import Forgot from "./../../../features/forgot";

export default (): React.Node => {
  return (
    <Switch>
      <AuthRoute exact path="/auth/signin" component={SignIn} />
      <ForgotRoute exact path="/auth/forgot" component={Forgot} />
    </Switch>
  );
};