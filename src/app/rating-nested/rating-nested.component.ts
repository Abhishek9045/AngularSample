import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-rating-nested',
  templateUrl: './rating-nested.component.html',
  styleUrls: ['./rating-nested.component.css']
})
export class RatingNestedComponent implements OnInit,OnChanges {

  constructor() { }


  @Input() rating: number;
  startWidth:number;

  ngOnChanges(){
    this.startWidth = this.rating * 75 / 5;
  }

  ngOnInit(): void {
  }

}
