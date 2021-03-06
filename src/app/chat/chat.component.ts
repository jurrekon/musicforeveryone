import { Component, OnInit,OnDestroy } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  moduleId: module.id,
  selector: 'chat-component',
  templateUrl: './chat.component.html',
  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  message;
  username;

  constructor(private chatService:ChatService) {}

  sendMessage()
  {
    this.message = this.username+': '+this.message;
    this.chatService.sendMessage( this.message);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}