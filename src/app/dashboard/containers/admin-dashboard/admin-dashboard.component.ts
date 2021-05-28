import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import Chart from 'chart.js';
import { ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  selectedAdminButton = 'overview';
  selectedDrillTypeButton = 'physical';
  selectedDrillUsageButton = 'most-used';
  dashLineChartData = [{ data: [165, 175, 159, 181, 176, 181, 165, 170, 183, 170], label: 'Total Practice Hours' }];
  dashLineChartLabels: Label[] = [
    ['Team', 'Name'],
    ['Team', 'Name'],
    ['Team', 'Name'],
    ['Team', 'Name'],
    ['Team', 'Name'],
    ['Team', 'Name'],
    ['Team', 'Name'],
    ['Team', 'Name'],
    ['Team', 'Name'],
    ['Team', 'Name'],
  ];
  dashLineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    elements: {
      point: {
        radius: 5,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 4,
        hoverBorderWidth: 4.8,
      },
      line: {
        borderWidth: 2.8,
        borderCapStyle: 'round',
        borderColor: 'grey',
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
            drawBorder: false,

            lineWidth: 1,
            zeroLineWidth: 1,
            drawTicks: false,
          },
          ticks: {
            display: true,
            autoSkip: false,
            fontSize: 11,
            padding: 12,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            drawOnChartArea: true,
            drawBorder: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
    tooltips: {
      enabled: true,
      backgroundColor: '#FFF',
      titleFontSize: 12,
      titleFontColor: '#333333',
      bodyFontColor: '#333333',
      bodyFontSize: 13,
      displayColors: false,
      titleMarginBottom: 10,
      bodySpacing: 5,
      mode: 'label',
      callbacks: {
        title: (tooltipItem, data) => {
          return null;
        },
      },
    },
  };
  dashLineChartColors = [
    {
      borderColor: '#63B1EC',
      fill: false,
    },
  ];
  dashLineChartLegend = false;
  dashLineChartPlugins = [
    {
      beforeDraw(chart: any) {
        const ctx = chart.ctx;
        const _stroke = ctx.stroke;
        // tslint:disable-next-line:space-before-function-paren
        ctx.stroke = function () {
          ctx.save();
          ctx.shadowColor = '#00000033';
          ctx.shadowBlur = 12;
          ctx.shadowOffsetX = 10;
          ctx.shadowOffsetY = 10;
          _stroke.apply(this, arguments);
          ctx.restore();
        };
      },
    },
  ];
  dashLineGradient = { gradient: false };

  // Bar Chart
  dashBarChartLabels: Label[] = [
    'Team Name',
    'Team Name',
    'Team Name',
    'Team Name',
    'Team Name',
    'Team Name',
    'Team Name',
    'Team Name',
    'Team Name',
    'Team Name',
  ];
  dashBarChartLegend = true;
  dashBarChartPlugins = [
    {
      beforeDraw(chart: any) {
        const ctx = chart.ctx;
        const _stroke = ctx.stroke;
        // tslint:disable-next-line:space-before-function-paren
        ctx.stroke = function () {
          ctx.save();
          ctx.shadowColor = '#999999';
          ctx.shadowBlur = 5;
          ctx.shadowOffsetX = 1;
          ctx.shadowOffsetY = 1;
          _stroke.apply(this, arguments);
          ctx.restore();
        };

        const _fill = ctx.fill;
        // tslint:disable-next-line:space-before-function-paren
        ctx.fill = function () {
          ctx.save();
          ctx.shadowColor = '#999999';
          ctx.shadowBlur = 8;
          ctx.shadowOffsetX = 1;
          ctx.shadowOffsetY = 1;
          _fill.apply(this, arguments);
          ctx.restore();
        };
      },
    },
  ];
  dashBarChartData = [
    {
      data: [120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
      label: 'Practice Type 1',
      stack: 'a',
      barThickness: 7.8,
    },
    {
      data: [170, 170, 170, 170, 170, 170, 170, 170, 170, 170],
      label: 'Practice Type 2',
      stack: 'a',
      barThickness: 7.8,
    },
    {
      data: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
      label: 'Practice Type 3',
      stack: 'a',
      barThickness: 7.8,
    },
    {
      data: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
      label: 'Practice Type 4',
      stack: 'a',
      barThickness: 7.8,
    },
  ];
  dashBarGradient = { gradient: false };
  dashBarChartColors = [
    {
      borderColor: '#86B3FF',
      backgroundColor: '#86B3FF',
    },
    {
      borderColor: '#F59C42',
      backgroundColor: '#F59C42',
    },
    {
      borderColor: '#9CD869',
      backgroundColor: '#9CD869',
    },
    {
      borderColor: '#102D5A',
      backgroundColor: '#102D5A',
    },
  ];

  dashBarChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: 'top' },
    cornerRadius: 20,
    scales: {
      xAxes: [
        {
          barPercentage: 0.3,
          gridLines: {
            drawOnChartArea: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            drawOnChartArea: true,
            drawBorder: false,
          },
          ticks: {
            display: false,
            autoSkip: true,
            max: 450,
            stepSize: 80,
            beginAtZero: true,
          },
        },
      ],
    },
    tooltips: {
      enabled: true,
      backgroundColor: '#FFF',
      titleFontSize: 12,
      titleFontColor: '#333333',
      bodyFontColor: '#8D8D8D',
      bodyFontSize: 13,
      displayColors: true,
      titleMarginBottom: 10,
      labelMarginBottom: 10,
      bodySpacing: 5,
      xPadding: 10,
      yPadding: 10,
      xAlign: 'center',
      yAlign: 'center',
      mode: 'label',
      callbacks: {
        title: (tooltipItem, data) => {
          let total = 0;
          for (let i = 0; i < data.datasets.length; i++) {
            total += data.datasets[i].data[tooltipItem[0].index];
          }
          return ['Total Practice Hours : ' + total];
        },
        label: (tooltipItem: any, data: any) => {
          const dstLabel = data.datasets[tooltipItem.datasetIndex].label;
          const yLabel = tooltipItem.yLabel;
          return dstLabel + ': ' + yLabel;
        },
        labelTextColor: (tooltipItem, chart) => {
          if (chart.tooltip._data.datasets[tooltipItem.datasetIndex].label) {
            return '#8D8D8D';
          }
        },
      },
    },
  };

  teamDrillData = [
    {
      team: 'Team Name',
      high: 'HH:MM',
      low: 'HH:MM',
      average: 'HH:MM',
    },
    {
      team: 'Team Name',
      high: 'HH:MM',
      low: 'HH:MM',
      average: 'HH:MM',
    },
    {
      team: 'Team Name',
      high: 'HH:MM',
      low: 'HH:MM',
      average: 'HH:MM',
    },
    {
      team: 'Team Name',
      high: 'HH:MM',
      low: 'HH:MM',
      average: 'HH:MM',
    },
    {
      team: 'Team Name',
      high: 'HH:MM',
      low: 'HH:MM',
      average: 'HH:MM',
    },
    {
      team: 'Team Name',
      high: 'HH:MM',
      low: 'HH:MM',
      average: 'HH:MM',
    },
    {
      team: 'Team Name',
      high: 'HH:MM',
      low: 'HH:MM',
      average: 'HH:MM',
    },
    {
      team: 'Team Name',
      high: 'HH:MM',
      low: 'HH:MM',
      average: 'HH:MM',
    },
    {
      team: 'Team Name',
      high: 'HH:MM',
      low: 'HH:MM',
      average: 'HH:MM',
    },
    {
      team: 'Team Name',
      high: 'HH:MM',
      low: 'HH:MM',
      average: 'HH:MM',
    },
    {
      team: 'Team Name',
      high: 'HH:MM',
      low: 'HH:MM',
      average: 'HH:MM',
    },
    {
      team: 'Team Name',
      high: 'HH:MM',
      low: 'HH:MM',
      average: 'HH:MM',
    },
    {
      team: 'Team Name',
      high: 'HH:MM',
      low: 'HH:MM',
      average: 'HH:MM',
    },
  ];

  drillUsageData = [
    {
      drillName: 'Drill Name',
      drillCategory: 'Drill Category',
      time: '35 Hours/week',
    },
    {
      drillName: 'Drill Name',
      drillCategory: 'Drill Category',
      time: '35 Hours/week',
    },
    {
      drillName: 'Drill Name',
      drillCategory: 'Drill Category',
      time: '35 Hours/week',
    },
    {
      drillName: 'Drill Name',
      drillCategory: 'Drill Category',
      time: '35 Hours/week',
    },
    {
      drillName: 'Drill Name',
      drillCategory: 'Drill Category',
      time: '35 Hours/week',
    },
    {
      drillName: 'Drill Name',
      drillCategory: 'Drill Category',
      time: '35 Hours/week',
    },
    {
      drillName: 'Drill Name',
      drillCategory: 'Drill Category',
      time: '35 Hours/week',
    },
    {
      drillName: 'Drill Name',
      drillCategory: 'Drill Category',
      time: '35 Hours/week',
    },
    {
      drillName: 'Drill Name',
      drillCategory: 'Drill Category',
      time: '35 Hours/week',
    },
    {
      drillName: 'Drill Name',
      drillCategory: 'Drill Category',
      time: '35 Hours/week',
    },
    {
      drillName: 'Drill Name',
      drillCategory: 'Drill Category',
      time: '35 Hours/week',
    },
    {
      drillName: 'Drill Name',
      drillCategory: 'Drill Category',
      time: '35 Hours/week',
    },
    {
      drillName: 'Drill Name',
      drillCategory: 'Drill Category',
      time: '35 Hours/week',
    },
  ];

  displayedDrillUsageColumns: string[] = ['drillName', 'drillCategory', 'time'];

  drillUsageDataSource = new MatTableDataSource(this.drillUsageData);

  dataSource = new MatTableDataSource(this.teamDrillData);

  displayedColumns: string[] = ['team', 'high', 'low', 'average'];

  adminDashboardData = {
    totalTeams: 24,
    totalPlayers: 285,
    createdDrills: 4,
    practiceHours: 2345,
  };

  data = [
    {
      name: 'Joe Philip',
      teamname: 'FC Dallas',
      age: 32,
      gender: 'Male',
      dob: '12-20-1990',
      height: '6.1',
      weight: '200',
      season: 'S1',
      gp: 120,
      mp: 120,
      position: 'UB',
      workload: '85%',
      ppg: 10,
      seasonpoints: 125,
    },
    {
      name: 'Joe Philip',
      teamname: 'FC Dallas',
      age: 32,
      gender: 'Male',
      dob: '12-20-1990',
      height: '6.1',
      weight: '200',
      season: 'S2',
      gp: 120,
      mp: 120,
      position: 'UB',
      workload: '85%',
      ppg: 10,
      seasonpoints: 125,
    },
  ];

  tableData = new MatTableDataSource(this.data);

  displayedColumn: string[] = [
    'name',
    'teamname',
    'age',
    'gender',
    'dob',
    'height',
    'weight',
    'season',
    'gp',
    'mp',
    'position',
    'workload',
    'ppg',
    'seasonpoints',
    'action',
  ];

  options = ['Overview', 'Performance', 'Growth', 'Points Scored'];
  selectedOption = 'Overview';
  teams = ['FC Dallas'];
  selectedTeam = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.calculateBarRadius();
  }

  calculateBarRadius() {
    // tslint:disable-next-line:space-before-function-paren
    (Chart as any).elements.Rectangle.prototype.draw = function () {
      const ctx = this._chart.ctx;
      const vm = this._view;
      // tslint:disable-next-line: one-variable-per-declaration
      let left, right, top, bottom, signX, signY, borderSkipped;
      let borderWidth = vm.borderWidth;
      const cornerRadius = 10;

      if (!vm.horizontal) {
        // bar
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;
        top = vm.y;
        bottom = vm.base;
        signX = 1;
        signY = bottom > top ? 1 : -1;
        borderSkipped = vm.borderSkipped || 'bottom';
      } else {
        // horizontal bar
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
        signX = right > left ? 1 : -1;
        signY = 1;
        borderSkipped = vm.borderSkipped || 'left';
      }

      if (borderWidth) {
        const barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
        borderWidth = borderWidth > barSize ? barSize : borderWidth;
        const halfStroke = borderWidth / 2;
        const borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
        const borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
        const borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
        const borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
        if (borderLeft !== borderRight) {
          top = borderTop;
          bottom = borderBottom;
        }
        if (borderTop !== borderBottom) {
          left = borderLeft;
          right = borderRight;
        }
      }

      ctx.beginPath();
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = borderWidth;

      const corners = [
        [left, bottom],
        [left, top],
        [right, top],
        [right, bottom],
      ];

      const borders = ['bottom', 'left', 'top', 'right'];
      let startCorner = borders.indexOf(borderSkipped, 0);
      if (startCorner === -1) {
        startCorner = 0;
      }

      function cornerAt(index) {
        return corners[(startCorner + index) % 4];
      }

      let corner = cornerAt(0);
      ctx.moveTo(corner[0], corner[1]);

      for (let i = 1; i < 4; i++) {
        corner = cornerAt(i);
        let nextCornerId = i + 1;
        if (nextCornerId === 4) {
          nextCornerId = 0;
        }

        const nextCorner = cornerAt(nextCornerId);

        const width = corners[2][0] - corners[1][0];
        const height = corners[0][1] - corners[1][1];
        const x = corners[1][0];
        const y = corners[1][1];

        let cradius = cornerRadius;

        if (cradius > height / 2) {
          cradius = height / 2;
        }
        if (cradius > width / 2) {
          cradius = width / 2;
        }

        let lastVisible = 0;
        for (let findLast = 0, findLastTo = this._chart.data.datasets.length; findLast < findLastTo; findLast++) {
          if (!this._chart.getDatasetMeta(findLast).hidden) {
            lastVisible = findLast;
          }
        }
        const rounded = this._datasetIndex === lastVisible;

        if (this._chart.config.options.cornerRadius) {
          if (rounded) {
            ctx.moveTo(x + cradius, y);
            ctx.quadraticCurveTo(x + width + 1, y + 1, x + width, y + cradius);
            ctx.lineTo(x + width, y + height);
            ctx.lineTo(x, y + height);
            ctx.lineTo(x, y + cradius);
            ctx.quadraticCurveTo(x, y, x + cradius, y);
          } else if (vm.backgroundColor === '#86B3FF') {
            ctx.beginPath();
            ctx.moveTo(x + cradius, y);
            ctx.lineTo(x + width, y);
            ctx.lineTo(x + width, y + height - cradius);
            ctx.quadraticCurveTo(x + width, y + height, x + width - cradius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - cradius);
            ctx.lineTo(x, y + 1);
            ctx.quadraticCurveTo(x, y, x + cradius, y);
            ctx.closePath();
          } else {
            ctx.moveTo(x, y);
            ctx.lineTo(x + width, y);
            ctx.lineTo(x + width, y + height);
            ctx.lineTo(x, y + height);
            ctx.lineTo(x, y);
          }
        } else {
          ctx.moveTo(x, y);
          ctx.lineTo(x + width, y);
          ctx.lineTo(x + width, y + height);
          ctx.lineTo(x, y + height);
          ctx.lineTo(x, y);
        }
      }
      ctx.fill();
      if (borderWidth) {
        ctx.stroke();
      }
    };
  }

  buttonChange(name: any) {
    this.selectedAdminButton = name;
  }

  drillButtonChange(name: any) {
    this.selectedDrillTypeButton = name;
  }

  drillUsageChange(name: any) {
    this.selectedDrillUsageButton = name;
  }

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
