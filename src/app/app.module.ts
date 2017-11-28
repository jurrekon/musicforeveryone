import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { searchPageComponent } from './searchPage';
import { LyricsComponent } from './lyrics/lyrics.component';
import { SongsComponent } from './songs/songs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    searchPageComponent,
    LyricsComponent,
    SongsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
      FormsModule,
      routes
  ],
  providers: [],
  bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
