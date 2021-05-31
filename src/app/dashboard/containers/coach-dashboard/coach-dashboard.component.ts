import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Router } from '@angular/router';
@Component({
  selector: 'app-coach-dashboard',
  templateUrl: './coach-dashboard.component.html',
  styleUrls: ['./coach-dashboard.component.scss'],
})
export class CoachDashboardComponent implements OnInit {
  // Line Chart
  dashLineChartData = [{ data: [165, 175, 159, 181, 176, 181, 169, 180, 183, 170], label: 'Total Practice Hours' }];
  dashLineChartLabels: Label[] = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
  dashLineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    elements: {
      point: {
        radius: 6,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 5.5,
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
      borderColor: '#376DC8',
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

  // Doughnut Chart
  dashDoughnutChartLabels: Label[] = ['Player Position', 'Player Position', 'Player Position', 'Player Position'];
  dashDoughnutChartData = [[10, 35, 17, 17]];
  dashDoughnutChartOptions: any = {
    responsive: true,
    barRoundness: 1,
    cutoutPercentage: 80,
    elements: {
      arc: {
        roundedCornersFor: 0,
        borderWidth: 6,
        offset: 100,
      },
    },
    percentageInnerCutout: 10,
    plugins: {
      datalabels: {
        align: 'start',
        anchor: 'start',
        offset: 10,
        borderRadius: 4,
        borderWidth: 1,
      },
    },
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
  dashDoughnutChartColors = [
    {
      backgroundColor: ['#9CD869', '#376DC8', '#86B3FF', '#F59C42'],
      hoverBorderColor: ['#9CD869', '#376DC8', '#86B3FF', '#F59C42'],
      hoverBorderWidth: 1,
    },
  ];
  dashDoughnutChartLegend = false;
  dashDoughnutChartPlugins = [
    {
      beforeDraw(chart) {
        const ctx = chart.ctx;
        const txt = 'Center Text';

        const sidePadding = 60;
        const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
        const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

        const stringWidth = ctx.measureText(txt).width;
        const elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

        const widthRatio = elementWidth / stringWidth;
        const newFontSize = Math.floor(30 * widthRatio);
        const elementHeight = chart.innerRadius * 2;
        const fontSizeToUse = Math.min(newFontSize, elementHeight);

        ctx.font = 'bold 20px Montserrat';
        ctx.fillStyle = '#333333';

        // Draw text in center
        ctx.fillText('18 Hrs', centerX, centerY);
        const centerY2 = (chart.chartArea.top + 35 + chart.chartArea.bottom) / 2;
        ctx.font = 10 + 'px Montserrat';
        ctx.fillStyle = '#333333';
        ctx.fillText('Per week', centerX, centerY2);
      },
    },
  ];

  // Range Slider
  rangeMinValue = 4;
  rangeMaxValue = 6;
  rangeOptions: Options = {
    floor: 0,
    ceil: 8,
    step: 1,
    readOnly: true,
  };

  playersPracticeLoad = [
    {
      name: 'Player Name',
      position: 'Position',
      time: '30 Hours',
    },
    {
      name: 'Player Name',
      position: 'Position',
      time: '30 Hours',
    },
    {
      name: 'Player Name',
      position: 'Position',
      time: '30 Hours',
    },
    {
      name: 'Player Name',
      position: 'Position',
      time: '30 Hours',
    },
    {
      name: 'Player Name',
      position: 'Position',
      time: '30 Hours',
    },
  ];

  dashboardCards = [
    {
      name: 'Total Rosters',
      value: 4,
      src: 'assets/images/dashboard/people.svg',
      iconClass: 'people-icon',
      lgText: '',
      classes: '',
      url: 'roaster',
    },
    {
      name: 'Total Players',
      value: 285,
      src: 'assets/images/dashboard/groups.svg',
      iconClass: 'prospects-icon',
      lgText: '',
      classes: '',
      url: 'dashboard/player-list',
    },
    {
      name: 'Practice Plans',
      value: 4,
      src: 'assets/images/dashboard/calender.svg',
      iconClass: 'calender-icon',
      lgText: '',
      classes: '',
      url: 'practice-plans',
    },
    {
      name: 'Practice Hours',
      value: 2345,
      src: 'assets/images/dashboard/practice-hours.svg',
      iconClass: 'teams-icon',
      lgText: '',
      classes: '',
      url: 'practice-plans',
    },
  ];

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

  goToPage(url) {
    this.router.navigateByUrl(url);
  }
}
