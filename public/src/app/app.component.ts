import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  allCakes: any;
  newCake: any;
  createNewErrors : any;
  selectedCake: any;

  constructor(private _HttpService: HttpService){}

  ngOnInit(){
    this.resetCake();
    this.getAllCakes();
  }

  resetCake(){
    this.newCake = {
      bakerName: "",
      imgURL: ""
    };
  }

  getAllCakes(){
    let obs = this._HttpService.getAllCakesFromDB();
    obs.subscribe(data => {
      console.log(data);
      this.allCakes = data;
    });
  }
  

  onSubmitNew() {
    let observable = this._HttpService.postCakeToDB(this.newCake);
    observable.subscribe(data => {
      if (data['errors']) {
        this.createNewErrors = data;
      }
      else{
        this.resetCake();
        this.getAllCakes();
      }
    });
  }

  showDetail(cake){
    this.selectedCake = cake;
  }
  
}
