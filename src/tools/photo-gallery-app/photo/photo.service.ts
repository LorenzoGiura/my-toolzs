import { Injectable } from "@angular/core";
import { PhotoType } from "./photo.module";

@Injectable({providedIn: 'root'})
export class PhotoService {
    private photos: PhotoType[] = [
        {
            id: 1,
            file_name: 'building_1.jpg',
            title: 'Towers',
            category: 'Building',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },
        {
            id: 2,
            file_name: 'building_2.jpg',
            title: 'Skylab',
            category: 'Building',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },        
        {
            id: 3,
            file_name: 'building_3.jpg',
            title: 'Glazed Building',
            category: 'Building',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },        
        {
            id: 4,
            file_name: 'building_4.jpg',
            title: 'Spiral Palace',
            category: 'Building',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },       
        {
            id: 5,
            file_name: 'building_5.jpg',
            title: 'Cupola',
            category: 'Building',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },
        {
            id: 6,
            file_name: 'dog_1.jpg',
            title: 'Frisky',
            category: 'Dog',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },
        {
            id: 7,
            file_name: 'dog_2.jpg',
            title: 'Pitty',
            category: 'Dog',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },        
        {
            id: 8,
            file_name: 'dog_3.jpg',
            title: 'Arnold',
            category: 'Dog',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },        
        {
            id: 9,
            file_name: 'dog_4.jpg',
            title: 'Axel',
            category: 'Dog',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },       
        {
            id: 10,
            file_name: 'dog_5.jpg',
            title: 'Fuffo',
            category: 'Dog',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },
        {
            id: 11,
            file_name: 'flowers_1.jpg',
            title: 'Field of Flowers',
            category: 'Flowers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },
        {
            id: 12,
            file_name: 'flowers_2.jpg',
            title: 'Blue flower',
            category: 'Flowers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },        
        {
            id: 13,
            file_name: 'flowers_3.jpg',
            title: 'Mountain flowers',
            category: 'Flowers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },        
        {
            id: 14,
            file_name: 'flowers_4.jpg',
            title: 'Bird on flower',
            category: 'Flowers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        },       
        {
            id: 15,
            file_name: 'flowers_5.jpg',
            title: 'Pink petals',
            category: 'Flowers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            like: false
        }
    ];

    private photoCategorys = [
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
  }