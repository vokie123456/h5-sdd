/**
 * rem 布局工具类
 * @author yong
 */

export default class WithREM {
  deferTimer = null;
  fontSize = 100;

  constructor(options){
    this.options = options || {
      minWidth: 320, // the smalles width which the design fit.
      maxWidth: 750, // the largest width which the design fit.
      resizeInterval: 166, // Corresponds to 10 frames at 60 Hz.
    };
  }

  init = () => {
   // set rem
   this.updateWidth(window.innerWidth);
   // watch width change
   window.addEventListener('resize', this.handleResize);
   return this;
  }

  handleResize = () => {
    clearTimeout(this.deferTimer);
    this.deferTimer = setTimeout(() => {
      this.updateWidth(window.innerWidth);
    }, this.options.resizeInterval);
  };

  updateWidth = (innerWidth) => {
    const {
      minWidth,
      maxWidth
    } = this.options;

    let width = Math.min(maxWidth, Math.max(innerWidth, minWidth));
    let fontSize = 100 * (width / maxWidth);
    if (this.fontSize != fontSize){
      // update html rem
      this.fontSize = fontSize;
      document.documentElement.style.fontSize = `${this.fontSize}px`;
    }
    return this.fontSize;
  }
 
};