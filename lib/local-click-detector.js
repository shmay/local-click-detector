(function() {
  var docCount, localCount;

  localCount = 0;

  docCount = 0;

  Polymer("local-click-detector", {
    attached: function() {
      var parent;
      parent = this.parentNode;
      this.host = parent.host ? parent.host : parent;
      this.listenEvent = bowser.ios ? 'touchstart' : 'click';
      return this.setupListeners();
    },
    detached: function() {
      return this.rmListeners();
    },
    setupListeners: function() {
      var h;
      h = this.host;
      this.localClickListener = function() {
        localCount += 1;
        return h.clickedLocally = true;
      };
      this.docClickListener = function() {
        if (localCount > docCount) {
          return docCount += 1;
        } else {
          localCount = docCount = 0;
          return h.clickedLocally = false;
        }
      };
      document.addEventListener(this.listenEvent, this.docClickListener);
      return h.addEventListener(this.listenEvent, this.localClickListener);
    },
    rmListeners: function() {
      this.host.removeEventListener(this.listenEvent, this.localClickListener);
      return document.removeEventListener(this.listenEvent, this.docClickListener);
    }
  });

}).call(this);
