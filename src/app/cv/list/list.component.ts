import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input({required: true}) cvs: Cv[] | null = [];
}
