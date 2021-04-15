import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import * as d3 from 'd3';
@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss'],
})
export class PlayerDetailsComponent implements AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('chart') private chartContainer: ElementRef;

  seasonlements = [
    {
      season: '2018-19',
      age: 19,
      gp: 68,
      mp: 31.1,
      fg: 44.5,
      pt3: 34,
      ft: 79,
      reb: 4.5,
      ast: 4.9,
      stl: 1.6,
      blk: 0.3,
      tov: 2.4,
      pf: 1.8,
      pts: 19.9,
    },
    {
      season: '2019-20',
      age: 20,
      gp: 68,
      mp: 31.1,
      fg: 44.5,
      pt3: 34,
      ft: 79,
      reb: 4.5,
      ast: 4.9,
      stl: 1.6,
      blk: 0.3,
      tov: 2.4,
      pf: 1.8,
      pts: 38,
    },
  ];

  recentlements = [
    {
      date: '1/1/19',
      opp: 19,
      gr: 68,
      mp: 31.1,
      fg: 44.5,
      pt3: 34,
      ft: 79,
      reb: 4.5,
      ast: 4.9,
      stl: 1.6,
      blk: 0.3,
      tov: 2.4,
      pf: 1.8,
      pts: 19.9,
    },
    {
      date: '2019-20',
      opp: 20,
      gr: 68,
      mp: 31.1,
      fg: 44.5,
      pt3: 34,
      ft: 79,
      reb: 4.5,
      ast: 4.9,
      stl: 1.6,
      blk: 0.3,
      tov: 2.4,
      pf: 1.8,
      pts: 38,
    },
  ];

  seasonData = new MatTableDataSource(this.seasonlements);
  recentData = new MatTableDataSource(this.recentlements);

  seasonColumns: string[] = [
    'season',
    'age',
    'gp',
    'mp',
    'fg',
    'pt3',
    'ft',
    'reb',
    'ast',
    'stl',
    'blk',
    'tov',
    'pf',
    'pts',
  ];
  recentColumns: string[] = [
    'date',
    'opp',
    'gr',
    'mp',
    'fg',
    'pt3',
    'ft',
    'reb',
    'ast',
    'stl',
    'blk',
    'tov',
    'pf',
    'pts',
  ];
  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    // let dataValues: number[] = [10, 5, 25, 15, 20, 35];
    // let multiplier: number = 10;
    // let textColor: string = 'white';
    // let padding: string = '2px';
    // let barColors: string[] = ['red', 'green', 'blue'];
    // let element = this.chartContainer.nativeElement;
    // d3.select(element)
    // .selectAll('div')
    // .data(dataValues)
    // .enter().append('div')
    // .style('width',  (d) => {
    //     return d * multiplier + 'px';
    // })
    // .style('background-color',  (d) => {
    //     return barColors[d % barColors.length];
    // })
    // .style('border', '1px solid white')
    // .style('color', textColor)
    // .style('padding', '2px')
    // .text((d) => { return d; });
  }

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
