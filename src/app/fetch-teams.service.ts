import { Injectable } from '@angular/core';
 import 'rxjs/add/operator/map';
 import { HttpClient,HttpErrorResponse } from 
 '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchTeamsService {

  constructor(private http: HttpClient) { }
  getMatches(){
    return this.http.get(`https://app.sportdataapi.com/api/v1/soccer/teams?apikey=68c736a0-6174-11ec-91ff-29d6d9345955&country_id=237`);
  }
}
