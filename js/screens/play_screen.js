game.PlayScreen = me.ScreenObject.extend({
  init : function() {
    this.parent(true);
  },

  onResetEvent : function() {
    me.input.bindKey(me.input.KEY.X, 'attack', true);
    me.input.bindMouse(me.input.mouse.LEFT, me.input.KEY.X);

    this.player = new game.Player();
    me.game.world.addChild(new game.Background());
    me.game.world.addChild(new game.Lava());
    me.game.world.addChild(this.player);

    game.HUD = new game.HUD.Container(this.player);
    me.game.world.addChild(game.HUD);
    this.spawnNewEnemy();
  },


  onDestroyEvent : function() {
    // remove the HUD from the game world
    me.game.world.removeChild(game.HUD);
    me.input.unbindKey(me.input.KEY.X);
    me.input.unbindMouse(me.input.mouse.LEFT);
  },

  spawnNewEnemy : function() {
    me.entityPool.add('enemy', game.Enemy, true);
    this.enemy = game.Enemy.spawn();
  },

  update : function(time) {
    this.parent(time);
    if(me.input.isKeyPressed('attack')) {
      this.player.attack();
      if(this.enemy.collisionBox.containsPointV(me.input.mouse.pos)) {
        this.enemy.die();
      }
    }
  }
});
