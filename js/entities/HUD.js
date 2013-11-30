

/**
 * a HUD container and child items
 */

game.HUD = game.HUD || {};


game.HUD.Container = me.ObjectContainer.extend({

  init: function() {
    // call the constructor
    this.parent();

    this.isPersistent = true;

    this.collidable = false;

    this.z = Infinity;

    // give a name
    this.name = "HUD";

    this.addChild(new game.HUD.ImmunityLevel(30, 30));
  }
});


/**
 * a basic HUD item to display score
 */
game.HUD.ImmunityLevel = me.Renderable.extend({
  /**
   * constructor
   */
  init: function(x, y) {

    // call the parent constructor
    // (size does not matter here)
    this.parent(new me.Vector2d(x, y), 10, 10);
    this.font = new me.Font('Arial', '20px', 'green');

    // local copy of the global score
    this.immunity = -1;

    // make sure we use screen coordinates
    this.floating = true;
  },

  /**
   * update function
   */
  update : function () {
    // we don't do anything fancy here, so just
    // return true if the score has been updated
    if (this.immunity !== game.data.immunity) {
      this.immunity = game.data.immunity;
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
