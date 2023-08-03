import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  rating = 0;
  @Input() nbStars = 5;
  stars: number[] = [];
  constructor() {

  }
  ngOnInit(): void {
    let i = 1;
    for (let i = 1; i <= this.nbStars; i++) {
      this.stars.push(i);
    }
 }

}
