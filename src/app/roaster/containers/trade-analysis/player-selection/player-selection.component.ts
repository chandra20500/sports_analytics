import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TradeConfigurationComponent } from '../../../components/trade-configuration/trade-configuration.component';
@Component({
  selector: 'app-player-selection',
  templateUrl: 'player-selection.component.html',
  styleUrls: ['./player-selection.component.scss'],
})
export class PlayerSelectionComponent implements OnInit {
  teams = [
    { id: 'maverick', name: 'Mavericks' },
    { id: 'nuggets', name: 'Nuggets' },
    { id: 'dallas', name: 'Dallas' },
    { id: 'mtx', name: 'MTX' },
  ];

  logo = {
    maverick: 'team4.png',
    nuggets: 'team1.png',
    dallas: 'team2.png',
    mtx: 'team3.png',
  };

  tradedPlayers = {
    maverick: [],
    nuggets: [],
    dallas: [],
    mtx: [],
  };

  tradedIds = [];

  players = {
    maverick: [
      { id: 'm1', name: 'Player Name', teamid: 'maverick', currentteam: 'maverick' },
      { id: 'm2', name: 'Player Name', teamid: 'maverick', currentteam: 'maverick' },
      { id: 'm3', name: 'Player Name', teamid: 'maverick', currentteam: 'maverick' },
      { id: 'm4', name: 'Player Name', teamid: 'maverick', currentteam: 'maverick' },
      { id: 'm5', name: 'Player Name', teamid: 'maverick', currentteam: 'maverick' },
      { id: 'm6', name: 'Player Name', teamid: 'maverick', currentteam: 'maverick' },
    ],
    nuggets: [
      { id: 'n1', name: 'Player Name', teamid: 'nuggets', currentteam: 'nuggets' },
      { id: 'n2', name: 'Player Name', teamid: 'nuggets', currentteam: 'nuggets' },
      { id: 'n3', name: 'Player Name', teamid: 'nuggets', currentteam: 'nuggets' },
      { id: 'n4', name: 'Player Name', teamid: 'nuggets', currentteam: 'nuggets' },
      { id: 'n5', name: 'Player Name', teamid: 'nuggets', currentteam: 'nuggets' },
      { id: 'n6', name: 'Player Name', teamid: 'nuggets', currentteam: 'nuggets' },
    ],
    dallas: [
      { id: 'd1', name: 'Player Name', teamid: 'dallas', currentteam: 'dallas' },
      { id: 'd2', name: 'Player Name', teamid: 'dallas', currentteam: 'dallas' },
      { id: 'd3', name: 'Player Name', teamid: 'dallas', currentteam: 'dallas' },
      { id: 'd4', name: 'Player Name', teamid: 'dallas', currentteam: 'dallas' },
      { id: 'd5', name: 'Player Name', teamid: 'dallas', currentteam: 'dallas' },
      { id: 'd6', name: 'Player Name', teamid: 'dallas', currentteam: 'dallas' },
    ],
    mtx: [
      { id: 't1', name: 'Player Name', teamid: 'mtx', currentteam: 'mtx' },
      { id: 't2', name: 'Player Name', teamid: 'mtx', currentteam: 'mtx' },
      { id: 't3', name: 'Player Name', teamid: 'mtx', currentteam: 'mtx' },
      { id: 't4', name: 'Player Name', teamid: 'mtx', currentteam: 'mtx' },
      { id: 't5', name: 'Player Name', teamid: 'mtx', currentteam: 'mtx' },
      { id: 't6', name: 'Player Name', teamid: 'mtx', currentteam: 'mtx' },
    ],
  };

  options = {
    maverick: {
      m1: false,
      m2: false,
      m3: false,
      m4: false,
      m5: false,
      m6: false,
    },
    nuggets: {
      n1: false,
      n2: false,
      n3: false,
      n4: false,
      n5: false,
      n6: false,
    },
    dallas: {
      d1: false,
      d2: false,
      d3: false,
      d4: false,
      d5: false,
      d6: false,
    },
    mtx: {
      t1: false,
      t2: false,
      t3: false,
      t4: false,
      t5: false,
      t6: false,
    },
  };
  constructor(private router: Router, public dialog: MatDialog) {}
  ngOnInit(): void {}

  openConfigure() {
    const dialogRef = this.dialog.open(TradeConfigurationComponent, {
      width: '75%',
      disableClose: false,
      data: {
        type: 'add',
      },
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
      }
    });
  }

  showOptions(team, player, state) {
    this.options[team][player] = state;
  }

  teamChange(newteam, index, player, traded) {
    if (player.currentteam !== newteam) {
      if (traded) {
        if (player.teamid === newteam) {
          const tradedId = this.tradedIds.indexOf(player.id);
          if (tradedId > -1) {
            this.tradedIds.splice(tradedId, 1);
          }
          this.tradedPlayers[player.currentteam].splice(index, 1);
          this.players[player.teamid][index].currentteam = newteam;
        } else {
          this.tradedPlayers[player.currentteam].splice(index, 1);
          this.players[player.teamid][index].currentteam = newteam;
          player.currentteam = newteam;
          this.tradedPlayers[newteam].push(player);
          this.tradedIds.push(player.id);
        }
      } else {
        this.players[player.teamid][index].currentteam = newteam;
        player.currentteam = newteam;
        this.tradedPlayers[newteam].push(player);
        this.tradedIds.push(player.id);
      }
    }
    this.options[player.teamid][player.id] = false;
  }

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
