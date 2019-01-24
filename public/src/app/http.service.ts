import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getAllCakesFromDB(){
    return this._http.get('/api/cakes');
  }

  postCakeToDB(cake){
    return this._http.post('/api/cakes', cake);
  }

  postRatingToDb(id, rating){
    return this._http.patch(`/api/cakes/${id}`, rating);
  }

  getOneCakeFromDB(id) {
    return this._http.get('/api/cakes/' + id);
  }
}
