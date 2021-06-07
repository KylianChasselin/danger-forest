class Beam extends Phaser.GameObjects.Sprite{
    constructor(scene){
  
      var x = scene.player.x;
      
      var y = scene.player.y - 16;
  
      super(scene, x, y, "beam");
  
      // 3.2 add to scene
      scene.add.existing(this);
  
      // 3.3
      scene.physics.world.enableBody(this);

      if (firedirection[0])
      {
        this.body.velocity.x = 400;
      }
      else if (firedirection[1])
      {
        this.body.velocity.x = - 400;
      }
      else 
      {
        this.body.velocity.x = - 400;
      }
      // 4.2 add the beam to the projectiles group
      scene.projectiles.add(this);
  
    }
    update(){

    }
  }









  <script type="text/javascript" src= "scene/Projectile.js"></script>