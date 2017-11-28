import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {searchPageComponent} from './searchPage';
import {LyricsComponent} from './lyrics/lyrics.component'

export const router: Routes =[
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: 'searchPage', component: searchPageComponent},
    {path: 'lyrics', component: LyricsComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);