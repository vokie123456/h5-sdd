/**
 * 主框架
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';

import WithREM from '../utils/WithREM';

const withREM = new WithREM().init();

const styleSheet = createStyleSheet('AppFrame', (theme) => {
  return {
    '@global': {
      html: {
        height: '100%',
        boxSizing: 'border-box'
      },
      '*, *:before, *:after': {
        boxSizing: 'inherit',
      },
      body: {
        margin: '0px',
        height: '100%',
        fontSize: '14px',
        color: theme.palette.text.primary
      },
      '#app': {
        height: '100%'
      },
      a: {
        color: theme.palette.primary['600'],
        textDecoration: 'none',
      }
    },
    root: {
      height: '100%'
    },
    footer: {
      display: 'flex',
      lineHeight: '48px',
      padding: '0px 12%',
      justifyContent: 'space-around',
      borderTop: `1px solid ${theme.palette.grey['300']}`
    },
    link: {
      color: theme.palette.grey['600']
    },
    kf: {
      color: theme.palette.primary['700']
    }
  };
});

class AppFrame extends Component {
  constructor(props, context) {
    super(props, context);
  }
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
  }
  render() {
    const classes = this.context.styleManager.render(styleSheet);
    const {
      children
    } = this.props;

    return (
      <div className={classes.root}>
        {/* 使用全屏组件包裹 */}
        {children}
        <footer className={classes.footer}>
          <a className={classes.link} href="https://m.wolaidai.com/about?source=app">关于我来贷</a>
          <a className={classes.link} href="http://web.wolaidai.com/webapp/faq/">常见问题</a>
          <a className={classes.kf} href="http://www.sobot.com/chat/h5/index.html?sysNum=43d20d665ffe4412b037bfeb7c7162d0"> 在线客服</a>
        </footer>
      </div>
    );
  }
}

export default AppFrame;