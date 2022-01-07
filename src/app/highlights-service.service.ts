import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HighlightsServiceService {

  constructor(private http: HttpClient) { }
  apiCall(){
    return this.http.get('https://www.scorebat.com/video-api/v3');
}

}
