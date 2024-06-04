import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { PhotoComponent } from "../photo/photo.component";
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [MatIconModule, PhotoComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  constructor(
    private photoService: PhotoService
  ) {}

  photos = this.photoService.getFavoritePhotos();

  get thereIsPhoto() {
    return this.photos.length > 0;
  }
}
