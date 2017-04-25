/**
 * 登录页面
 * @author yong
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';

import Fullscreen from '../components/Fullscreen';

class Login extends Component{
  constructor(props, context) {
    super(props, context);
  }
  static contextTypes = {
    styleManager: customPropTypes.muiRequired
  }
  render() {
    return (
      <Fullscreen>
        
      </Fullscreen>
    );
  }
}

export default Login;