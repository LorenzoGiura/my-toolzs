import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { PhotoComponent } from "../photo/photo.component";
import { PhotoService } from '../photo/photo.service';

@Component({
    selector: 'app-main-photo-gallery',
    standalone: true,
    templateUrl: './main-photo-gallery.component.html',
    styleUrl: './main-photo-gallery.component.css',
    imports: [RouterOutlet, RouterModule , PhotoComponent, MatIconModule, CommonModule, FormsModule]
})
export class MainPhotoGalleryComponent {

  constructor(
    private router: Router,
    private photoService: PhotoService
  ) {}
  
  isFiltered = false;
  isGalleryHome = true;
  selectedValue = 0;
  categorys = this.photoService.getCategorys();
  photos = this.photoService.getPhotos();

  get thereIsPhoto() {
    return this.photos.length > 0;
  }

  getCategoryLabel(categoryValue: number) {
    return this.categorys.find(el => el.value == categoryValue)?.label;
  }
  
  onChangeCategory(event: any) {
    this.isFiltered = true;
    this.photos = this.photoService.getPhotosByCategory(event.target.value);
  }

  onClickCloseFilter() {
    this.isFiltered = false;
    this.selectedValue = 0;
    this.photos = this.photoService.getPhotos();

  }

  onPhotoDetails(photoId: number) {
    this.isGalleryHome = false;
    this.router.navigate(['/gallery', photoId]);
  }

  onClickFavoritesPage() {
    this.photos = this.photoService.getPhotos();
    this.isGalleryHome = false;
    this.isFiltered = false;
    this.selectedValue = 0;
    this.router.navigate(['gallery/favorites']);
  }

  onClickHomeGallery() {
    this.isGalleryHome = true;
    this.router.navigate(["gallery"]);
  }

  onClickFavorites(photoId: number) {
    this.photoService.setFavoriteById(photoId);
  }
}