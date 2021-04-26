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
  teams = [1, 1, 1];
  players = [1, 1, 1, 1, 1, 1];
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

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
