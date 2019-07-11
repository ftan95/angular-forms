import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  signupForm: FormGroup;

  public test:number;

  secondApp() {
    let sec = document.getElementById("secondBox");
    sec.style.display = "inline-block";
  }

  thirdApp() {
    let tri = document.getElementById("thirdBox");
    tri.style.display = "inline-block";
  }

  public fNum: number = Math.floor((Math.random() * 10) + 1);
  public SNum: number = Math.floor((Math.random() * 10) + 1);

  value: number = 0;
  total: number = 0;
  onEnter(value: number) {
    this.value = value;
    this.total = this.fNum + this.SNum;
    if (this.total != this.value) {
      let see = document.getElementById("math") as HTMLElement;
      see.innerHTML = '<span class = "form-text text-muted">Please enter the correct sum</span>'
    }
  }

  validateQuantity(): void {
    console.log(this.signupForm.value);
    let quantity = this.signupForm.value.quantity.toString();
    quantity.replace(/\D+/g, '');
    this.signupForm.controls.quantity.setValue(+quantity);
  }

  selectUp() {
    let test = document.getElementById("down") as HTMLElement;
    test.style.color = "#555";
  }

  selectDown() {
    let test = document.getElementById("up") as HTMLElement;
    test.style.color = "#555";
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'website': new FormControl(null, Validators.required),
      'color': new FormControl(null, Validators.required),
      'quantity': new FormControl(null, Validators.required),
      'device': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'agree': new FormControl(null, Validators.required),
      'num': new FormControl(null, Validators.required)
    });

    //Subscribe to value changes
    this.signupForm.valueChanges.subscribe(
      (value) => { 
        // console.log(value);
        // console.log(this.signupForm.value);
      }
    );

    //Subscribe to status changes
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );

    //Set form values
    // this.signupForm.setValue({
    //   'accountType': 'Personal',
    //   'name': 'Fred',
    //   'email': 'ftan@example.com',
    //   'website': '1212 some street',
    //   'city': 'Modesto',
    //   'device': 'Singapore',
    //   'zipCode': '888888'
    // });

    //Update/path form values
    // this.signupForm.patchValue({
    //   'email': 'kerping_tan@hotmail.com'
    // });
  }


  onSubmit() {
    console.log(this.signupForm);
  }

  onPress(event) {
    if (event.key === "e") {
      event.preventDefault();
    }
  }

  // onReset() {
  //   this.signupForm.reset();
  // }
}
