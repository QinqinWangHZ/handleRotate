var doneLoaded = false;
var doneDelay = false;
var doneCallback;

window.handleRotate = {
  start: function () {
    var self = this;
    setTimeout(function() {
      if (doneLoaded) {
        self.stopRotate();
      }
      doneDelay = true;
    }, 3000);
  },
  stopRotate: function () {
    // 若传入回调函数则执行
    if (typeof(doneCallback) === 'function') {
      doneCallback();
    }
  },
  done: function (elements, callback) {
    var self = this;
    if (typeof(callback) === 'function') {
      doneCallback = callback;
    }
    doneLoaded = true;
    if (doneDelay) {
      self.stopRotate();
    }
  }
};

// export default handleRotate;