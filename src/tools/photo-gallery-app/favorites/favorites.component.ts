import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { PhotoComponent } from "../photo/photo.component";
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [MatIconModule, PhotoComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

  constructor(
    private router: Router,
    private photoService: PhotoService
  ) {}

  photos = this.photoService.getFavoritePhotos();

  get thereIsPhoto() {
    return this.photos.length > 0;
  }

  onRemoveFavoriteEvent(photoId: number) {
    let photo = this.photos.find(el => el.id == photoId);
    const index = this.photos.indexOf(photo!);

    if (index > -1) this.photos.splice(index, 1);
  }

  onPhotoDetails(photoId: number) {
    this.router.navigate(['/gallery', photoId]);
  }
}
