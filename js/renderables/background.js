game.Background = me.Renderable.extend({
  init : function() {
    this.parent(new me.Vector2d(0, 0), 1, 1);
    this.isRenderable = true;
    this.inViewport = true;
    this.z = 0;
  },

  draw : function(context) {
    me.video.clearSurface(context, '#000');
  }
});