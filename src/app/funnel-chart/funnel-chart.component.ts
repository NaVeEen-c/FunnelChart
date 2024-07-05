import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import Funnel from 'highcharts/modules/funnel'
import { HighchartsChartModule } from 'highcharts-angular';
import { mergeMap,map} from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllTeachers } from '../teachers.store/teacher.selector';
import { selectAllStudents } from '../students.store/student.selector';


Funnel(Highcharts)
@Component({
  selector: 'app-funnel-chart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './funnel-chart.component.html',
  styleUrl: './funnel-chart.component.css'
})
export class FunnelChartComponent implements OnInit{
 
  data:[string,number][]=[["TotalStudents",0],["TotalTeachers",0],["playsFootball",0],["playseCricket",0],["playsBoth",0]]
  
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions:Highcharts.Options={
    chart: {
      type: 'funnel'
    }, accessibility: {
      
      enabled:false
  },
  title: {
    text: 'SportsChart'
},
   
    plotOptions: {
      funnel: {
        neckWidth: '30%',
        neckHeight: '25%',
        width: '70%',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.y:.0f}',
          softConnector: true
        }
      }
    },
    series: [{
      type: 'funnel',
      name: "Count",
      data: []
    }]
  };



  constructor(private store:Store){}
  ngOnInit(): void {
    console.log('hgf')
    this.store.select(selectAllTeachers).pipe(
      mergeMap(teachers=>this.store.select(selectAllStudents).pipe(map(students=>{
       this.data=[["TotalStudents",0],["TotalTeachers",0],["playsFootball",0],["playseCricket",0],["playsBoth",0]]
        for (let teacher of teachers){
          if(teacher.plays==='cricket'){
            this.data[3][1]++
          }
          else if(teacher.plays==='football'){
            this.data[2][1]++;

          }
          else{
            this.data[4][1]++;
          }
        }
        for (let student of students){
          if(student.plays==='cricket'){
            this.data[3][1]++
          }
          else if(student.plays==='football'){
            this.data[2][1]++;

          }
          else{
            this.data[4][1]++;
          }
        }
        this.data[0][1]=students.length
        this.data[1][1]=teachers.length
        this.updateChartData(this.data)
        
      }
  
      ))
     )).subscribe()
}
  updateChartData(data:any[]){
    console.log('navinnn')
    const chart = Highcharts.chart('funnelContainer', this.chartOptions);
    chart.series[0].setData(data, true);
   this.data=[["TotalStudents",0],["TotalTeachers",0],["playsFootball",0],["playseCricket",0],["playsBoth",0]]
  
        
  }
  
  
 
  

}
