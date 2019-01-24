import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() cakeId: any;
  newRating: any;


  constructor(private _HttpService: HttpService) { }

  ngOnInit() {
    this.resetNewRating();
  }

  resetNewRating(){
    this.newRating = {
      comments: "",
      stars: Number
    }
  }

  onSubmitRating() {
    const obs = this._HttpService.postRatingToDb(this.cakeId, this.newRating);
    obs.subscribe((data) => {
      console.log(data);
      this.resetNewRating()
    });
  }

}
