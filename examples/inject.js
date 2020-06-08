!(function () {
  var BLM = (window.BLM = window.BLM || []);
  if (BLM.initialized)
    window.console &&
      console.error &&
      console.error('BLM snippet already called');
  else {
    BLM.initialized = !0;
    BLM.load = function (o) {
      var n = document.createElement('script');
      n.type = 'text/javascript';
      n.src = '../dist/blm.js';
      var a = document.getElementsByTagName('script')[0];
      a.parentNode.insertBefore(n, a);
      BLM._loadOptions = o;
    };
    BLM.load({ name: 'Drafted', primaryColor: 'blue' });
  }
})();

