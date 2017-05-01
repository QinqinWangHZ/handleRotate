(function ($) {
  var Index = {
    init: function () {
      this.bindEvents();
    },
    bindEvents: function () {
      var _this = this;
      $('.J-btn').on('click', function () {
        $('.progress-layer').show();
        handleRotate.start();
        _this.doAjax('http://rapapi.org/mockjs/17483/getData', '', function (data) {
          handleRotate.done('*', function () {
            alert('success');
            $('.progress-layer').hide();
          });
        }, function () {
          handleRotate.done('*', function () {
            alert('error');
            $('.progress-layer').hide();
          });
        });
      });
    },
    doAjax: function (url, params, resolve, reject, callback) {
      Zepto.ajax({
        type: 'GET',
        url: url,
        data: params || {},
        timeout: 5000,
        cache: false,
        dataType: 'jsonp',
        jsonp: callback,
        success: function (data) {
          console.log(data);
          if (data.success || data.result && data.result.success) {
            resolve(data);
          } else {
            reject(data);
          }
        },
        error: function (xhr, errorType) {
          reject({success: false, resultCode: 'error'});
        }
      })
    }
  };
  Index.init();
})(window.Zepto);
