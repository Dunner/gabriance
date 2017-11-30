/*
 * Game state
 * ==========
 *
 */

import Character from '../objects/Character';

export default class Game extends Phaser.State {

  populateTeams(teams) {
    const {centerX} = this.world;

    return teams.map((team) => {
      let rooster = [];
      for (let i = 0 ; i < team.numberOfPlayers; i++) {
        rooster.push({
          team: team.name,
          id: i,
          object: this.add.existing(
            new Character(
              this.game, 
              centerX+team.centerXOffset, 
              team.centerYOffset + i*50,
              team.name
            ))
        });
      }
      return Object.assign({}, team, {rooster: rooster})
    })
  }

  create() {

    const teamsConfig = [
      {
        name: 'blue',
        numberOfPlayers: 5,
        centerXOffset: -100,
        centerYOffset: 80,
        rooster: []
      }, 
      {
        name: 'green',
        numberOfPlayers: 5,
        centerXOffset: 100,
        centerYOffset: 80,
        rooster: []
      }
    ];
    let teams = this.populateTeams(teamsConfig);
    

    setTimeout(function(){
      for (let i = 0; i < teams.length; i++) {
        let teamName = teams[i].name;
        for (let x = 0; x < teams[i].rooster.length; x++) {
          let player = teams[i].rooster[x];
          player.object.moveHorizontally(teamName == 'blue' ? -200 : 200);
        }
      }
    },2000)
  }

}
