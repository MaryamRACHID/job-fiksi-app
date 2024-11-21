import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  @Input() currentChat: any;
  messages = [
    { text: 'Hello sir, Good Morning', sent: true, time: '09:30 am' },
    { text: 'Morning. Can I help you?', sent: false, time: '09:31 am' },
    { text: 'I saw the UI/UX Designer vacancy...', sent: true, time: '09:33 am' },
    { text: 'Oh yes, please send your CV...', sent: false, time: '09:35 am' }
  ];
  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, sent: true, time: 'Now' });
      this.newMessage = '';
    }
  }
}
