game.TitleScreen = me.ScreenObject.extend({
  init : function() {
    this.parent(true);
  },

  draw : function(context) {
    context.drawImage(this.frames[this.currentFrame], 0, 0);
  },

  onResetEvent : function() {
    me.input.bindKey(me.input.KEY.X, 'next', true);
    me.input.bindKey(me.input.KEY.ENTER, 'next', true);
    me.input.bindMouse(me.input.mouse.LEFT, me.input.KEY.X);
    this.currentFrame = 0;
    this.frames = [
      me.loader.getImage('intro'),
      me.loader.getImage('instructions')
    ];
    me.game.world.addChild(new game.Background());
  },


  /**
   *  action to perform when leaving this screen (state change)
   */
  onDestroyEvent: function() {
    me.input.unbindKey(me.input.KEY.X);
    me.input.unbindKey(me.input.KEY.ENTER);
    me.input.unbindMouse(me.input.mouse.LEFT);
  },

  update : function(time) {
    this.parent(time);
    if(me.input.isKeyPressed('next')) {
      this.currentFrame++;
      if(this.currentFrame > 1) {
        me.state.change(me.state.PLAY);
      }
    }
    return true;
  }
});
