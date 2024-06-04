import { Injectable } from "@angular/core";
import { PhotoCategory, PhotoType } from "./photo.module";

@Injectable({providedIn: 'root'})
export class PhotoService {
    private photos: PhotoType[] = [
        {
            id: 1,
            file_name: 'building_1.jpg',
            title: 'Towers',
            category: 0,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: true
        },
        {
            id: 2,
            file_name: 'building_2.jpg',
            title: 'Skylab',
            category: 0,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },        
        {
            id: 3,
            file_name: 'building_3.jpg',
            title: 'Glazed Building',
            category: 0,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },        
        {
            id: 4,
            file_name: 'building_4.jpg',
            title: 'Spiral Palace',
            category: 0,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },       
        {
            id: 5,
            file_name: 'building_5.jpg',
            title: 'Cupola',
            category: 0,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },
        {
            id: 6,
            file_name: 'dog_1.jpg',
            title: 'Frisky',
            category: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },
        {
            id: 7,
            file_name: 'dog_2.jpg',
            title: 'Pitty',
            category: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },        
        {
            id: 8,
            file_name: 'dog_3.jpg',
            title: 'Arnold',
            category: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },        
        {
            id: 9,
            file_name: 'dog_4.jpg',
            title: 'Axel',
            category: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },       
        {
            id: 10,
            file_name: 'dog_5.jpg',
            title: 'Fuffo',
            category: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },
        {
            id: 11,
            file_name: 'flowers_1.jpg',
            title: 'Field of Flowers',
            category: 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },
        {
            id: 12,
            file_name: 'flowers_2.jpg',
            title: 'Blue flower',
            category: 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },        
        {
            id: 13,
            file_name: 'flowers_3.jpg',
            title: 'Mountain flowers',
            category: 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },        
        {
            id: 14,
            file_name: 'flowers_4.jpg',
            title: 'Bird on flower',
            category: 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },       
        {
            id: 15,
            file_name: 'flowers_5.jpg',
            title: 'Pink petals',
            category: 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        }
    ];

    private photoCategorys: PhotoCategory[] = [
        {value: 0, label: 'Building'},
        {value: 1, label: 'Dog'},
        {value: 2, label: 'Flowers'},
        {value: 3, label: 'Cartoon'},
    ]
  
    getPhotos() {
      return this.photos;
    }

    getCategorys() {
        return this.photoCategorys;
    }

    getPhotosByCategory(category: number) {
        return this.photos.filter(el => el.category == category);
    }

    getFavoritePhotos() {
        return this.photos.filter(el => el.like);
    }

    setFavoriteById(photoId: number) {
        let photo = this.photos.find(photo => photo.id == photoId);
        if(photo) {
            photo.like = photo?.like ? false : true;
        }
    }
  }