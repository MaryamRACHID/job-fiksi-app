import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.scss'
})
export class BankComponent {
  @Output() bankInfoChange = new EventEmitter<any>();

  @ViewChild('otherDocUploadInput') otherDocUploadInput!: ElementRef;

  @Input() userType: string | null = null;

  onFileChange(event: Event, type: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log(`${type} file selected:`, file);
    }
  }

  onBankUpdate() {
    this.bankInfoChange.emit(this.userType);
  }
}
