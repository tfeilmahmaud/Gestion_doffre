import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { chart } from 'highcharts';
import { Job } from 'src/app/Entity/job';
import { JobService } from 'src/app/Service/job.service';

interface dataValue {
  name: "",
  color: string,
  y: number,
}

@Component({
  selector: 'app-location-coverage',
  templateUrl: './location-coverage.component.html',
  styleUrls: ['./location-coverage.component.css']
})
export class LocationCoverageComponent {

  Locations: string[] = new Array();
  chartData: dataValue[]=new Array();
  totalLocation: any = 0;
  LocationMap = new Map();
  Loca: string[] = new Array();
  chart:any;
  constructor(private service: JobService) {
    


    this.service.fetchAllLocation().subscribe(
      data => {
        this.totalLocation = data.length;
        data.forEach((i: any) => {
          this.Locations.push(this.toTitleCase(i));
        });
        console.log(this.Locations);

        this.Locations.forEach((i: any) => {
          if (this.LocationMap.has(i)) {
            this.LocationMap.set(i, this.LocationMap.get(i) + 1);
          } else {
            this.LocationMap.set(i, 1);
          }
        });
        console.log(this.LocationMap);
        for(let key of this.LocationMap.keys()){
          this.Loca.push(key);
          const temp = {
            name: key,
            y: Math.round((this.LocationMap.get(key)/this.totalLocation)*100),
            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
          }
          this.chartData.push(temp)
        }
        console.log(this.Loca);
        console.log("from backend", this.chartData)
        this.chart = new Chart({
          chart: {
            type: 'pie',
            height: 325
          },
          title: {
            text: 'Location wise jobs'
          },
          xAxis: {
            categories: this.Loca
          },
          yAxis: {
            title: {
              text: 'Coverage in %'
            }
          },
          series: [
            {
              type: 'pie',
              data: this.chartData,
            }
          ],
          credits: {
            enabled: false
          }
        })
      },
      error => console.log(error)
    )
  }

  ngOnInit(): void {
    console.log("from backend", this.chartData)
    
  }

  toTitleCase(str: string) {
    // str = str.toLowerCase().split(' ');
    str = str.charAt(0).toUpperCase() + str.slice(1);
    // for (var i = 0; i < str.length; i++) {
    //   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    // }
    return str;
  }
  
}
