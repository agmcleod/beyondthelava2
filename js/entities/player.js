game.Player = me.ObjectEntity.extend({
  init : function() {
    this.parent(200, 100, {
      image : 'player',
      spritewidth : 64,
      spriteheight : 128
    });
    this.renderable.addAnimation('idle', [0], 1);
    this.renderable.addAnimation('kick', [0,1,1,1,1,1], 1);
  },

  update : function(time) {
    this.parent(time);
    this.updateMovement();
    return true;
  }
})