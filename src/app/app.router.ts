import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {searchPageComponent} from './searchPage';
import {LyricsComponent} from './lyrics/lyrics.component';
import {SongsComponent} from './songs/songs.component';

export const router: Routes =[
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: 'searchPage', component: searchPageComponent},
    {path: 'lyrics', component: LyricsComponent},
    {path: 'songs' , component: SongsComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);