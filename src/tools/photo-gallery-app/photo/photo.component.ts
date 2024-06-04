import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { PhotoType } from './photo.module';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent {
  constructor(
    private photoService: PhotoService
  ) {}
  
  photo = input.required<PhotoType>();
  categorys = this.photoService.getCategorys();

  onClickFavorites(photoId: number) {
    this.photoService.setFavoriteById(photoId);
  }

  getCategoryLabel(categoryValue: number) {
    return this.categorys.find(el => el.value == categoryValue)?.label;
  }

}
