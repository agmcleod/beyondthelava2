

/**
 * a HUD container and child items
 */

game.HUD = game.HUD || {};


game.HUD.Container = me.ObjectContainer.extend({

  init: function(player) {
    // call the constructor
    this.parent();

    this.isPersistent = true;

    this.collidable = false;

    this.z = Infinity;

    // give a name
    this.name = "HUD";

    this.addChild(new game.HUD.ImmunityLevel(30, 30, player));
  }
});


/**
 * a basic HUD item to display score
 */
game.HUD.ImmunityLevel = me.Renderable.extend({
  init: function(x, y, player) {
    this.player = player;
    // call the parent constructor
    // (size does not matter here)
    this.parent(new me.Vector2d(x, y), 10, 10);
    this.font = new me.Font('Arial', '20px', 'green');

    // local copy of the global score
    this.immunity = -1;

    // make sure we use screen coordinates
    this.floating = true;
  },

  update : function () {
    if (this.immunity !== this.player.immunity) {
      this.immunity = this.player.immunity;
      return true;
    }
    return false;
  },

  /**
   * draw the score
   */
  draw : function (context) {
    this.font.draw(context, 'Immunity: ' + this.immunity, this.pos.x, this.pos.y);
  }

});
