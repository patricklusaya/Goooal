import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

declare var newsDisplay: any;
const headers= new HttpHeaders()
.set('content-type', 'application/json')
.set('Access-Control-Allow-Origin', '*');
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  name = 'Angular';
  title = 'demo';
  searchText="";
  data:any;
  loader = true;
  // public myNews:any= []
  constructor() { }
  
// getNews(){
//   const url = "";
//   this.http.get(url ,{ 'headers': headers }).subscribe((resulty)=>{
//     this.myNews = resulty
//     console.log(resulty);
// })}
  ngOnInit(): void {
    

    // this.getNews()
    // new newsDisplay()
  }

}
