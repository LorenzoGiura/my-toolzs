import { Component } from '@angular/core';
import { PhotoComponent } from "../photo/photo.component";
import { RouterOutlet, RouterModule  } from '@angular/router';

@Component({
    selector: 'app-main-photo-gallery',
    standalone: true,
    templateUrl: './main-photo-gallery.component.html',
    styleUrl: './main-photo-gallery.component.css',
    imports: [RouterOutlet, RouterModule , PhotoComponent]
})
export class MainPhotoGalleryComponent {
  onChangeCategory(event: any) {
  console.log(event?.target.value);
  }

  categorys = [
    {value: 0, label: 'Building'},
    {value: 1, label: 'Dog'},
    {value: 2, label: 'Flowers'},
    {value: 3, label: 'Cartoon'},
  ]
}