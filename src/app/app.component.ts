import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HttpClient } from '@angular/common/http';
import { RatingComponent } from "./components/rating/rating.component";
import { SwUpdate } from '@angular/service-worker';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, NavbarComponent, RatingComponent]
})
export class AppComponent {
  title = 'ng16Standalone';
  x = signal(5);
  y = signal(7);
  z = computed(() => this.x() + this.y());
  constructor(private http: HttpClient, private swUpdate: SwUpdate) {
    this.swUpdate.activateUpdate;
    // this.swUpdate.checkForUpdate().then(
    //   () => {
    //     console.log('ready to update');

    //     // window.location.reload();
    //   }
    // );
    swUpdate.versionUpdates.subscribe(
      version => {
        if (version.type === 'VERSION_READY') {
          console.log('ready to update');
          window.location.reload();
        }
      }
    );
    // create a new instance
    this.x.set(3)
  }
  incerement() {
    this.x.set(this.x() + 1);
  }
}


