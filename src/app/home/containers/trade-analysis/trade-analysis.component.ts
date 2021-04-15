import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trade-analysis',
  templateUrl: './trade-analysis.component.html',
  styleUrls: ['./trade-analysis.component.scss'],
})
export class TradeAnalysisComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  elements = [
    {
      player_trade_in: 'Player Name',
      player_trade_out: 'Player Name',
      team_involved: '',
      contract: '1 year',
      payroll: '$ 900,000',
      impact: 'success',
    },
    {
      player_trade_in: 'Player Name',
      player_trade_out: 'Player Name',
      team_involved: '',
      contract: '1 year',
      payroll: '$ 900,000',
      impact: 'failure',
    },
    {
      player_trade_in: 'Player Name',
      player_trade_out: 'Player Name',
      team_involved: '',
      contract: '1 year',
      payroll: '$ 900,000',
      impact: 'success',
    },
    {
      player_trade_in: 'Player Name',
      player_trade_out: 'Player Name',
      team_involved: '',
      contract: '1 year',
      payroll: '$ 900,000',
      impact: 'failure',
    },
  ];
  data = new MatTableDataSource(this.elements);
  displayedColumns: string[] = [
    'player_trade_in',
    'player_trade_out',
    'team_involved',
    'contract',
    'payroll',
    'impact',
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
