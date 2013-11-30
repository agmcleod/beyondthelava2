game.Lava = me.Renderable.extend({
  init : function() {
    this.parent(new me.Vector2d(0, me.game.viewport.height - 32), me.game.viewport.width, 32);
    this.z = 3;
    this.isRenderable = true;
    this.inViewport = true;
  },

  draw : function(context) {
    context.save();
    var image = me.loader.getImage('lava');
    for(var i = 0; i < 6; i++) {
      context.drawImage(image, i * 128, this.pos.y);
    }
    context.restore();
  },

  update : function(time) {
    return false;
  }
})