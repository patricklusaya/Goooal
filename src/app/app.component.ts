import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'goooal';
public data:any = []

  constructor(private http: HttpClient) {}

  getData(){
    const url ='https://www.scorebat.com/video-api/v3'
    this.http.get(url).subscribe((res)=>{
      this.data = res
       
      
    })
}
  ngOnInit(): void {
 
      this.getData()
    
  }}
