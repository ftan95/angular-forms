import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-form';
  accountType = ['Personal', 'Business'];
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'accountType': new FormControl("Personal", Validators.required),
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'streetAddress': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'country': new FormControl(null, Validators.required),
      'zipCode': new FormControl(null, [Validators.pattern("[0-9]*"), Validators.maxLength(6)]),
    });

    //Subscribe to value changes
    this.signupForm.valueChanges.subscribe(
      (value) => console.log(value)
    );

    //Subscribe to status changes
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );

    //Set form values
    this.signupForm.setValue({
      'accountType': 'Personal',
      'name': 'Fred',
      'email': 'ftan@example.com',
      'streetAddress': '1212 some street',
      'city': 'Modesto',
      'country': 'Singapore',
      'zipCode': '888888'
    });

    //Update/path form values
    this.signupForm.patchValue({
      'email': 'kerping_tan@hotmail.com'
    });
  }


  onSubmit() {
    console.log(this.signupForm);
  }

  onReset() {
    this.signupForm.reset();
  }
}
