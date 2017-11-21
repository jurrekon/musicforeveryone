import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { ChatComponent }   from './chat/chat.component';
 
const appRoutes: Routes = [
  { path: 'crisis-center', component: ChatComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}