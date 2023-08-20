import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {
  phoneNumbers: any[] = [{ value: '' }];

  addPhoneNumber() {
    this.phoneNumbers.push({ value: '' });
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.splice(index, 1);
  }

  submitForm() {
    const formattedNumbers = this.phoneNumbers.map((number, index) => ({
      [`phoneNumber${index + 1}`]: number.value,
    }));

    console.log(formattedNumbers);
  }
}
