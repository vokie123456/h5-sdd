/**
 * 全屏组件
 * @author yong
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';

const styleSheet =  createStyleSheet('Fullscreen', (theme) => {
  return {
    root: {
      minHeight: '100%',
      paddingBottom: '50px',
      marginBottom: '-50px'
    }
  };
});

const Fullscreen = ({ children, className }, context) => {
  const classes = context.styleManager.render(styleSheet);

  return (
    <div className={classNames(classes.root, className)}>
      {children}
    </div>
  );
};

Fullscreen.contextTypes = {
  styleManager: customPropTypes.muiRequired
};

export default Fullscreen;