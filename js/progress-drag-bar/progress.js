class Progress {
  constructor(selsector, options) {
    this.parentDom = document.querySelector(selector);
    this.options = options;
    this.initDom();
  }
  initDom () {
    this.parentDom.innerHTML = `
    <div class="progree-bar">
      <div class="progress"></div>
      <div class="progree-button"></div>      
    </div>
    `
    this.progressBarDom = document.querySelector('.progress-bar');
    this.progressDom = document.querySelector('.progress');
    this.progressBtnDom = document.querySelector('.progree-button');
    this.initProgress();
    this.initEvent();
  }
  initProgress() {
    const { progress = 0 } = this.options;
    this.progressBarDomWidth = this.progressBarDom.offsetWidth;
    this.progressDom.style.width = `${progress * 100}%`;
    this.progressBarDom.style.left = `${progress * progressBarDomWidth}px`;
  }
  initEvent() {
    const { disableDrag = false, onDragStart } = this.options;
    if(disableDrag) return false;
    let downX = 0;
    this.progressBtnDom.addEventListener('touchStart', (e) => {
      const touch = e.touches[0];
      downX = touch.clientX;
      if (onDragStart) onDragStart();
      this.progressBtnDom.addEventListener('touchmove', function(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const diffx = touch.clientX - downX;
        this.progressDom.style.width
        this.progressBtnDom.style.left
      })
    })
  }
}
export default Progress