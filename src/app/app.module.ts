import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { FormsModule } from '@angular/forms';
import {searchPageComponent} from './searchPage';
import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    searchPageComponent
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
