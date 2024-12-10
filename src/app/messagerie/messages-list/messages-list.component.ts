import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.scss'
})
export class MessagesListComponent {
  conversations = [
    { name: 'Andy Robertson', image: 'path-to-image1', lastMessage: 'Oh yes, please send your CV...', unread: true },
    { name: 'Giorgio Chiellini', image: 'path-to-image2', lastMessage: 'Hello sir, Good Morning', unread: false },
    { name: 'Alex Morgan', image: 'path-to-image3', lastMessage: 'I saw the UI/UX Designer vacancy...', unread: false }
  ];

  openChat(conversation: any) {
    // Logic to open the selected chat
  }

  constructor(private router: Router) {}

  redirectToMessage(userId: string) {
    this.router.navigate(['conversation']);
  }
}
