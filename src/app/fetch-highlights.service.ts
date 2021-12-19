import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class FetchHighlightsService {
  public data:any = []
  url ='https://www.scorebat.com/video-api/v3'
  constructor(private http: HttpClient) { }

fetchdata(){
  this.http.get(this.url).subscribe((res)=>{
    this.data = res
    console.log(res);
    
  })
}

}
