import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddDrillDataComponent } from '../../components/add-drill-data/add-drill-data.component';
import { MatTableDataSource } from '@angular/material/table';
import { KeyValue } from '@angular/common';
@Component({
  selector: 'app-detailed-practice-plans',
  templateUrl: './detailed-practice-plans.component.html',
  styleUrls: ['./detailed-practice-plans.component.scss'],
})
export class DetailedPracticePlansComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  doughnutChartLabels: Label[] = ['Skill Training', 'Stamina Building', 'Skill Training', 'High Intensity'];
  doughnutChartData = [[35, 45, 10, 10]];
  doughnutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    cutoutPercentage: 80,
    tooltips: {
      enabled: true,
      backgroundColor: '#FFF',
      titleFontSize: 16,
      titleFontColor: '#0066ff',
      bodyFontColor: '#000',
      bodyFontSize: 14,
      displayColors: true,
    },
  };
  doughnutChartColors = [
    {
      backgroundColor: ['#F85951', '#333333', '#39AB41', '#F89751'],
      hoverBorderColor: ['#F85951', '#333333', '#39AB41', '#F89751'],
      hoverBorderWidth: 2,
      showTooltips: false,
    },
  ];
  doughnutChartLegend = false;
  doughnutChartPlugins = [
    {
      beforeDraw(chart) {
        const ctx = chart.ctx;
        const txt = 'Center Text';

        // Get options from the center object in options
        const sidePadding = 60;
        const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
        const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

        // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
        const stringWidth = ctx.measureText(txt).width;
        const elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

        // Find out how much the font can grow in width.
        const widthRatio = elementWidth / stringWidth;
        const newFontSize = Math.floor(30 * widthRatio);
        const elementHeight = chart.innerRadius * 2;

        // Pick a new font size so it will not be larger than the height of label.
        const fontSizeToUse = Math.min(newFontSize, elementHeight);

        ctx.font = 25 + 'px Montserrat';
        ctx.fillStyle = '#333333';

        // Draw text in center
        ctx.fillText('40%', centerX, centerY);
      },
    },
  ];

  lineChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Actual' },
    { data: [85, 69, 90, 91, 66, 65, 50], label: 'Forecast' },
  ];
  lineChartLabels: Label[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            drawOnChartArea: false,
            drawBorder: false,
          },
        },
      ],
    },
  };
  lineChartColors = [
    {
      borderColor: '#EAEEFF',
      backgroundColor: '#EAEEFF',
    },
    {
      borderColor: '#376DC8',
      fill: false,
    },
  ];
  lineChartLegend = false;
  lineChartPlugins = [];
  lineGradient = { gradient: false };
  players = [
    { name: 'Player 1', progress: 35, label: '35% exhausted' },
    { name: 'Player 2', progress: 65, label: '60% exhausted' },
    { name: 'Player 3', progress: 45, label: '45% exhausted' },
  ];

  schedules = [
    {
      startTime: '11:00 AM',
      endTime: '12:00 PM',
      name: 'Offensive Series 1',
      status: 'Completed',
      groupname: 'Group Name',
      players: 'Total Players',
      drills: [
        {
          name: 'Drill Name',
          category: 'Drill Category',
          result: 'Result',
          status: 'complete',
          hours: '2.5 ',
          reps: '3 ',
        },
        {
          name: 'Drill Name',
          category: 'Drill Category',
          result: 'Result',
          status: 'no_data',
          hours: '2.5 ',
          reps: '3 ',
        },
        {
          name: 'Drill Name',
          category: 'Drill Category',
          result: 'Result',
          status: 'ongoing',
          hours: '2.5 ',
          reps: '3 ',
        },
      ],
    },
    {
      startTime: '11:50 AM',
      endTime: '12:10 PM',
      name: 'Michigan Shooting series',
      status: 'Awating Drill Data',
      groupname: 'Group Name',
      players: 'Total Players',
      drills: [
        {
          name: 'Drill Name',
          category: 'Drill Category',
          result: 'Result',
          status: 'complete',
          hours: '2.5 ',
          reps: '3 ',
        },
        {
          name: 'Drill Name',
          category: 'Drill Category',
          result: 'Result',
          status: 'no_data',
          hours: '2.5 ',
          reps: '3 ',
        },
        {
          name: 'Drill Name',
          category: 'Drill Category',
          result: 'Result',
          status: 'ongoing',
          hours: '2.5 ',
          reps: '3 ',
        },
      ],
    },
    {
      startTime: '11:00 AM',
      endTime: '12:00 PM',
      name: 'Transition Breakdown Drill',
      status: 'Ongoing',
      groupname: 'Group Name',
      players: 'Total Players',
      drills: [
        {
          name: 'Drill Name',
          category: 'Drill Category',
          result: 'Result',
          status: 'complete',
          hours: '2.5 ',
          reps: '3 ',
        },
        {
          name: 'Drill Name',
          category: 'Drill Category',
          result: 'Result',
          status: 'no_data',
          hours: '2.5 ',
          reps: '3 ',
        },
        {
          name: 'Drill Name',
          category: 'Drill Category',
          result: 'Result',
          status: 'ongoing',
          hours: '2.5 ',
          reps: '3 ',
        },
      ],
    },
    {
      startTime: '12:00 PM',
      endTime: '12:50 PM',
      name: 'Water Break',
      status: 'Not Started',
      groupname: 'Group Name',
      players: 'Total Players',
      drills: [
        {
          name: 'Drill Name',
          category: 'Drill Category',
          result: 'Result',
          status: 'complete',
          hours: '2.5 ',
          reps: '3 ',
        },
        {
          name: 'Drill Name',
          category: 'Drill Category',
          result: 'Result',
          status: 'no_data',
          hours: '2.5 ',
          reps: '3 ',
        },
        {
          name: 'Drill Name',
          category: 'Drill Category',
          result: 'Result',
          status: 'ongoing',
          hours: '2.5 ',
          reps: '3 ',
        },
      ],
    },
  ];

  trialRecordsColumns = [];
  drillRecords = [
    {
      playerName: 'Player Name 1',
      drillName1: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName2: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName3: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName4: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName5: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
    },
    {
      playerName: 'Player Name 2',
      drillName1: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName2: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName3: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName4: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName5: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
    },
    {
      playerName: 'Player Name 3',
      drillName1: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName2: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName3: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName4: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName5: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
    },
    {
      playerName: 'Player Name 4',
      drillName1: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName2: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName3: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName4: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName5: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
    },
    {
      playerName: 'Player Name 5',
      drillName1: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName2: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName3: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName4: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName5: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
    },
    {
      playerName: 'Player Name 6',
      drillName1: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName2: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName3: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName4: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
      drillName5: {
        trial1: 'MM:SS',
        trial2: 'MM:SS',
        trial3: 'MM:SS',
      },
    },
  ];

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getObjectKeys();
  }

  addDrillData(drillname) {
    const dialogRef = this.dialog.open(AddDrillDataComponent, {
      width: '60%',
      disableClose: false,
      data: {
        type: 'add',
        name: drillname,
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

  getObjectKeys() {
    for (const key in this.drillRecords[0]) {
      if (key) {
        this.trialRecordsColumns.push(key);
      }
    }
  }

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

  checkRecordsColumn(obj: any) {
    if (obj.key === 'playerName') {
      return 'first-col-width';
    } else {
      return 'next-col-style';
    }
  }

  checkMainColumn(obj: any, last: any, first: any) {
    if (obj === 'playerName') {
      return 'pad-first-col drill-first-col';
    } else {
      return 'pad-next-col';
    }
  }

  checkDrillColumn(last: any, first: any) {
    if (first) {
      return 'drill-first-col';
    } else {
      return 'drill-next-col';
    }
  }
}
