/**
 * 登录页面
 * @author yong
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';

import Fullscreen from '../components/Fullscreen';

const styleSheet = createStyleSheet('Login', (theme) => {
  return {
    fullscreen: {
      padding: '0.6rem 0.94rem 1.1rem'
    },
    hi: {
      width: '2.88rem',
      margin: '0px auto',
      display: 'block'
    }
  }
});

class Login extends Component{
  constructor(props, context) {
    super(props, context);
  }
  static contextTypes = {
    styleManager: customPropTypes.muiRequired
  }
  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <Fullscreen className={classes.fullscreen} >
        <img className={classes.hi} src={require('../assets/images/login/hi@2x.png')} />
      </Fullscreen>
    );
  }
}

export default Login;