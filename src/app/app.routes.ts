import { Routes } from '@angular/router';
import { HomePageComponent } from '../tools/home-page/home-page.component';
import { MainPhotoGalleryComponent } from '../tools/photo-gallery-app/main-photo-gallery/main-photo-gallery.component';
import { MainTodoComponent } from '../tools/todo-app/main-todo/main-todo.component';
import { MainContactsComponent } from '../tools/contacts-app/main-contacts/main-contacts.component';
import { MainFilmsComponent } from '../tools/films-app/main-films/main-films.component';
import { MainWeatherComponent } from '../tools/weather-app/main-weather/main-weather.component';
import { FavoritesComponent } from '../tools/photo-gallery-app/favorites/favorites.component';
import { PhotoDetailsComponent } from '../tools/photo-gallery-app/photo-details/photo-details.component';

export const routes: Routes = [
    { path: '', title: "Home Page",  component: HomePageComponent },
    {   path: 'gallery', 
        title: "TOOLS | Gallery",  
        component: MainPhotoGalleryComponent,
        children: [
            { path: 'favorites', title: "TOOLS | Gallery Favorites",  component: FavoritesComponent },
            { path: ':id', title: "TOOLS | Gallery Details",  component: PhotoDetailsComponent },
        ]
    },
    { path: 'todo', title: "TOOLS | Todo",  component: MainTodoComponent },
    { path: 'contacts', title: "TOOLS | Contacts",  component: MainContactsComponent },
    { path: 'films', title: "TOOLS | Films",  component: MainFilmsComponent },
    { path: 'weather', title: "TOOLS | Weather",  component: MainWeatherComponent },
];
