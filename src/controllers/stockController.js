
import { game } from '../app';
import { shuffleArray } from '../utils';
import Cluster from '../objects/Cluster';

export default class StockController {

  constructor(stockQuote) {
    this.stockQuote = stockQuote;
    this.teamNames = ['buy', 'sell'];
    this.orderLevels = 5;
    this.createTeams();
    this.createClusters();
    this.mapOrderLevelsToClusters();
  }

  calcPriceToPercentage(price) {
    const { startprice } = this.stockQuote;
    return ((price - startprice) / startprice) * 100;
  }

  createTeams() {
    this.teams = {};
    this.teamNames.forEach((teamName) => {
      this.teams[teamName] = {
        clusters: []
      };
    });
  }

  calcWorldPosFromPrice(price) {
    const percentage = this.calcPriceToPercentage(price);
    const maxPercentage = 20;
    const middle = game.world.height/2;
    return (game.world.height/2)+(((middle/100)/(maxPercentage/100))*percentage);
  }

  createClusters() {
    const {teams, teamNames, orderLevels} = this;
    teamNames.forEach((teamName) => {
      for (var i = 0; i < orderLevels; i++) {
        const padding = game.world.width/5;
        const worldInnerWidth = game.world.width-(padding*2);
        const sectionWidth = (worldInnerWidth/orderLevels);
        const pos = {
          x: padding + (sectionWidth*i),
          y: 1500
        };
        teams[teamName].clusters.push(
          new Cluster(
            teamName,
            i,
            pos.x,
            pos.y
          )
        );
      }
    });
  }

  getCluster(teamName,index) {
    const {teams} = this;
    return teams[teamName].clusters[index];
  }

  mapOrderLevelsToClusters() {
    const { stockQuote, teamNames } = this;
    const { orderbook } = stockQuote;
    const { orderDepthLevels } = orderbook;

    teamNames.forEach((teamName) => {
      this.addVolumePercentages(orderDepthLevels[teamName]);
      orderDepthLevels[teamName] = this.shuffleTeamLevels(orderDepthLevels[teamName]);
      orderDepthLevels[teamName].forEach((object,index) => {
        let cluster = this.getCluster(teamName,index);
        cluster.setVolume(object.volumePercentage);
        cluster.setPosY(this.calcWorldPosFromPrice(object.price));
      });
    });
  }

  addVolumePercentages(team) {
    //Loops over all volumes in a teams orderlevels 
    //and adds percentage of total volume for each orderlevel
    let totalVolume = 0;
    team.forEach((object) => {totalVolume+=object.volume;});
    team.forEach((object) => {
      object.volumePercentage = Math.round((object.volume/totalVolume)*100);
    });

  }

  shuffleTeamLevels(team) {
    return shuffleArray(team);
  }


}

