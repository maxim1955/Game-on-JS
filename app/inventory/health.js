const health = {
    //amount of health that health gives
    power: 500,

    heal: function (){
        if(player.health + health.power > player.maxHealth){
            player.health = player.maxHealth;
        }else{
            player.health=health.power;
        }
    }
}

let potions = [];
