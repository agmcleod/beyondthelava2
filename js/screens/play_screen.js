game.PlayScreen = me.ScreenObject.extend({
  init : function() {
    this.parent(true);
  },

  onResetEvent: function() {
    // reset the score
    game.data.score = 0;

    // add our HUD to the game world
    game.HUD = new game.HUD.Container();
    me.game.world.addChild(game.HUD);
    me.game.world.addChild(new game.Background());
    me.game.world.addChild(new game.Lava());
  },


  /**
   *  action to perform when leaving this screen (state change)
   */
  onDestroyEvent: function() {
    // remove the HUD from the game world
    me.game.world.removeChild(game.HUD);
  }
});
