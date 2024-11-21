import { Component } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent {
  jobPreferences = {
    server: false,
    cook: false,
    dishwasher: false,
    other: false,
    otherType: ''
  };

  locationPreference: string = '';

  salaryPreference = {
    min: 1000,
    max: 2000
  };

  salarySliderOptions: Options = {
    floor: 0,
    ceil: 4000,
    step: 50,
    translate: (value: number): string => {
      return value + ' €';
    }
  };
}
