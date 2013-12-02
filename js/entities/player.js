game.Player = me.ObjectEntity.extend({
  init : function() {
    this.parent(200, 100, {
      image : 'player',
      spritewidth : 128,
      spriteheight : 128
    });
    this.collidable = false;
    this.z = 2;
    this.renderable.addAnimation('idle', [0], 1);
    this.renderable.addAnimation('kick', [1,1], 60);
    this.renderable.setCurrentAnimation('idle');
    this.attacking = false;
    this.touchTime = 0;
    this.immunity = 1;
  },

  attack : function() {
    this.pos.y = me.input.mouse.pos.y - this.height / 2;
    this.pos.x = me.input.mouse.pos.x - this.width / 2;
    this.falling = true;
    this.attacking = true;
    this.renderable.setCurrentAnimation('kick', (function() {
      this.renderable.setCurrentAnimation('idle');
      this.attacking = false;
      this.immunity++;
      this.pos.y = 100;
    }).bind(this));
  },

  update : function(time) {
    this.parent(time);
    if(this.bottom < me.game.viewport.height - 32) {
      this.updateMovement();
    }
    else {
      this.vel.y = 0;
      this.pos.y = me.game.viewport.height - 32 - this.height;
      this.falling = false;

      if(this.touchTime == 0 || me.timer.getTime() - this.touchTime > 1000) {
        this.touchTime = me.timer.getTime();
        if(this.immunity < 1) {
          me.game.world.removeChild(this);
        }
        if(!this.attacking) {
          this.immunity--;
        }
      }
    }
    return true;
  }
})