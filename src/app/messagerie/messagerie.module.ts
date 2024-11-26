import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessagesListComponent} from './messages-list/messages-list.component';
import {ChatComponent} from './chat/chat.component';
import {NoMessagesComponent} from './no-messages/no-messages.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    MessagesListComponent,
    ChatComponent,
    NoMessagesComponent
  ],
  exports: [
    MessagesListComponent,
    ChatComponent,
    NoMessagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class MessagerieModule { }
