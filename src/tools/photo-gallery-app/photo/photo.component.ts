import { Component, Output, input, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { PhotoType } from './photo.module';
import { PhotoService } from './photo.service';
import { RouterOutlet, RouterModule, Router  } from '@angular/router';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterModule, RouterOutlet],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent {

  constructor(
    private router: Router,
    private photoService: PhotoService
  ) {}

  @Output() photoDetailsEvent = new EventEmitter<number>();
  @Output() removeFavoriteEvent = new EventEmitter<number>();

  photo = input.required<PhotoType>();
  categorys = this.photoService.getCategorys();

  onClickFavorites(photoId: number) {
    this.photoService.setFavoriteById(photoId);
    this.removeFavoriteEvent.emit(this.photo().id);

  }

  getCategoryLabel(categoryValue: number) {
    return this.categorys.find(el => el.value == categoryValue)?.label;
  }

  onClickPhotoCard() {
    this.photoDetailsEvent.emit(this.photo().id);
  }
}
