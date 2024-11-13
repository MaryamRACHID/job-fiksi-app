import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile-type',
  templateUrl: './profile-type.component.html',
  styleUrl: './profile-type.component.scss'
})
export class ProfileTypeComponent {
  userType: string = '';
  @Output() userTypeChange = new EventEmitter<string>();

  constructor(private http: HttpClient) {}


  selectUserType(type: string) {
    this.userType = type;
    console.log(type);
    this.userTypeChange.emit(this.userType);
  }

  saveType() {
    this.userTypeChange.emit(this.userType);
    const apiUrl = 'https://your-api-endpoint.com/saveUserType'; // Replace with your API endpoint

    this.http.post(apiUrl, { userType: this.userType })
      .subscribe(
        response => {
          console.log('User type saved successfully:', response);
        },
        error => {
          console.error('Error saving user type:', error);
        }
      );
  }
}
