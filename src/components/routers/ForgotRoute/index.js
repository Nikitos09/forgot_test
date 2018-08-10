// @flow

import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import {
  compose,
  getContext,
  branch,
  renderComponent,
  withProps
} from "recompose";

const redirect = withProps({ to: `/auth/forgot` })(Redirect);
const ForgotRoute = compose(
  getContext({ token: PropTypes.object }),
  branch(props => !!props.token, renderComponent(redirect))
)(Route);

export default ForgotRoute;