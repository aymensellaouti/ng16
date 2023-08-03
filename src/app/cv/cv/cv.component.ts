import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '@app/cv';
import { CardComponent } from '@app/cv';
import { Observable } from 'rxjs';
import { Cv } from '../model/cv';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, ListComponent, CardComponent],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvs$: Observable<Cv[]>;
  constructor(private cvService: CvService) {
    this.cvs$ = this.cvService.getCvs();
  }
}
