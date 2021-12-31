import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var newsDisplay: any;
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public myNews:any= []
  constructor(private http:HttpClient) { }
  
getNews(){
  const url = "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=38592171167448598022df4c8e0d1760";
  this.http.get(url).subscribe((resulty)=>{
    this.myNews = resulty
    console.log(resulty);
})}
  ngOnInit(): void {
    this.getNews()
    new newsDisplay()
  }

}
