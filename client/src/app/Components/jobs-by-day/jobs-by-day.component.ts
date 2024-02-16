import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-jobs-by-day',
  templateUrl: './jobs-by-day.component.html',
  styleUrls: ['./jobs-by-day.component.css']
})
export class JobsByDayComponent {
  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Month wise JOBS'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
      {
        name: "Software Developer",
        type: "line",
        color: '#044342',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
      },
      {
        name: 'Analyst',
        type: 'line',
        color: '#7e0505',
        data: [
          47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159
        ]
      },
      {
        name: 'Digital Marketing',
        type: 'line',
        color: '#ed9e20',
        data: [
          17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59
        ]
      },
    ],
    credits: {
      enabled: false
    }
  });
}
