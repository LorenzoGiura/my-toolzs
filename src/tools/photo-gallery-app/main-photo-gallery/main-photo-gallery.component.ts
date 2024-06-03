import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { PhotoComponent } from "../photo/photo.component";
import { PhotoService } from '../photo/photo.service';

@Component({
    selector: 'app-main-photo-gallery',
    standalone: true,
    templateUrl: './main-photo-gallery.component.html',
    styleUrl: './main-photo-gallery.component.css',
    imports: [RouterOutlet, RouterModule , PhotoComponent, MatIconModule, CommonModule]
})
export class MainPhotoGalleryComponent {
  constructor(
    private router: Router,
    private photoService: PhotoService
  ) {}
  
  isFavorites = true;
  categorys = this.photoService.getCategorys();
  photos = this.photoService.getPhotos();
  
  onChangeCategory(event: any) {
    console.log(event?.target.value);
  }

  onClickFavoritesPage() {
    this.isFavorites = false;
    this.router.navigate(['gallery/favorites']);
  }

  onClickHomeGallery() {
    this.isFavorites = true;
    this.router.navigate(["gallery"]);
  }

  onClickFavorites(photoId: number) {
    this.photoService.setFavoriteById(photoId);
  }
}