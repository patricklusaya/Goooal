import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  public data:any = []

  

  constructor(private http: HttpClient) {}

  getData(){
    const url ='https://api.football-data.org/v2/competitions'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      
      console.log(res);
      
     
       
    
    })
}
ngOnInit(): void {
 
  this.getData()

}

}
