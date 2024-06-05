import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { PhotoType } from '../photo/photo.module';

@Component({
  selector: 'app-photo-details',
  standalone: true,
  imports: [],
  templateUrl: './photo-details.component.html',
  styleUrl: './photo-details.component.css'
})
export class PhotoDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  photoId !: number;
  photo !: PhotoType | undefined;
  categorys = this.photoService.getCategorys();

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.photoId = params['id']);
    this.photo = this.photoService.getPhotosById(this.photoId);
  }

  getCategoryLabel(categoryValue: number) {
    return this.categorys.find(el => el.value == categoryValue)?.label;
  }
}
