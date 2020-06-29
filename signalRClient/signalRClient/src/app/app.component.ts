import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignalRService } from './services/signal-r.service';
import { ChartModel } from './_interfaces/chartmodel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //public data: ChartModel[];
  public chartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public chartLabels: string[] = ['Realtime data for the chart'];
  public chartType = 'bar';
  public chartLegend = true;
  public colors: any[] = [
    {backgroundColor: '#5491DA'},
    {backgroundColor: '#E74C3C'},
    {backgroundColor: '#82E0AA'},
    {backgroundColor: 'cyan'}
  ];

  constructor(public signalRService: SignalRService, private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListner();
    this.signalRService.addBroadcastChartDataListener();
    this.startHttpRequest();
  }
  // tslint:disable-next-line:typedef
  startHttpRequest() {
    this.http.get('https://localhost:5001/api/chart').subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
  public chartClicked = (event) => {
    console.log(event);
    this.signalRService.broadcastChartData();
  }
}
