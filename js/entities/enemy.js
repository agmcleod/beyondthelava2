game.Enemy = me.ObjectEntity.extend({
  init : function(x, y) {
    this.parent(x, y, {
      image : 'enemy',
      spritewidth : 64,
      spriteheight : 96
    });

    this.z = 3;

    this.renderable.addAnimation('idle', [0], 1);
    this.renderable.addAnimation('death', [1,1], 60);
    this.renderable.setCurrentAnimation('idle');
  },

  die : function() {
    this.renderable.setCurrentAnimation('death', (function() {
      me.game.world.removeChild(this);
      game.playScreen.spawnNewEnemy();
    }).bind(this));
  }
});

game.Enemy.spawn = function() {
  var enemy = me.entityPool.newInstanceOf('enemy', Number.prototype.random(0, me.game.viewport.width - 64), me.game.viewport.height - 128);
  me.game.world.addChild(enemy);
  return enemy;
}