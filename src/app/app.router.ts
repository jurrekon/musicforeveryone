import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { searchPageComponent } from './searchPage';
import { LyricsComponent } from './lyrics/lyrics.component';
import { SongsComponent } from './songs/songs.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const router: Routes =[
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'searchPage', component: searchPageComponent},
    {path: 'lyrics', component: LyricsComponent},
    {path: 'songs' , component: SongsComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'register', component: RegisterComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);