import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cv } from '../model/cv';
import { DefaultImagePipe } from '../default-image.pipe';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input({required: true}) cv: Cv | null = null;
  @Input() size = 50;
}
