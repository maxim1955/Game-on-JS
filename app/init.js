document.addEventListener('DOMContentLoaded',domloaded,false);

const count = 10;

function domloaded() {
        initMap();
        let game =  setInterval(function (){
            document.getElementById('health').innerHTML = player.health;
            document.getElementById('damage').innerHTML = player.damage;
            draw();
            getPosition();
            checkItemTaken();
            enemiesActions();
            if(player.death()){
                clearInterval(game)
                location.reload()
            }
            if(enemies.length===0){
                clearInterval(game)
                alert('Congratulations, you killed all enemies. Please reload page to play again')
            }
        },)
}
