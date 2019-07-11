import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild("secondBox", {static: false})
  secondBox: ElementRef;
  @ViewChild("thirdBox", {static: false})
  thirdBox: ElementRef;
  @ViewChild("num", {static: false})
  num: ElementRef;
  @ViewChild("math", {static: false})
  math: ElementRef;

  signupForm: FormGroup;

  public test:number;

  //------------------ Opening second -------------
  public clicked = true;
  public triClicked = true;
  secondApp() {
    if (this.clicked == true) {
      this.openSec(this.secondBox);
    } else {
      this.closeSec(this.secondBox);
    }
  }

  openSec(variable: any) {
    console.log((variable))
    variable.nativeElement.style.display = "inline-block";
    this.clicked = false;
  }

  closeSec(variable: any) {
    variable.nativeElement.style.display = "none";
    this.clicked = true;
  }

  // --------------- Open Third -------------
  thirdApp() {
    if (this.triClicked == true) {
      this.openTri(this.thirdBox);
    } else {
      this.closeTri(this.thirdBox);
    }
  }

  openTri(variable: any) {
    variable.nativeElement.style.display = "inline-block";
    this.triClicked = false;
  }

  closeTri(variable: any) {
    variable.nativeElement.style.display = "none";
    this.triClicked = true;
  }

  //---------------------- Human Check --------------------
  public fNum: number = Math.floor((Math.random() * 10) + 1);
  public SNum: number = Math.floor((Math.random() * 10) + 1);
  value: number = 0;
  total: number = this.fNum + this.SNum;
  answer(event) {
    if (event.key === "Enter") {
      this.value = +this.num.nativeElement.value;
      if (this.total != this.value) {
        this.math.nativeElement.innerHTML = '<span class = "form-text text-muted">Please enter the correct sum</span>'
      } else {
        this.math.nativeElement.innerHTML = null;
      }
    }
  }

  //---------------------- Preventing user from pressing 'e' --------------------
  onPress(event) {
    if (event.key === "e") {
      event.preventDefault();
    }
  }

  //---------------------- Like or Dislike ------------------------
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
      'agree': new FormControl(null, Validators.requiredTrue),
      'num': new FormControl(null, Validators.required)
    });

    //Subscribe to value changes
    this.signupForm.valueChanges.subscribe(
      (value) => {console.log(value);}
    );

    //Subscribe to status changes
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onReset() {
    this.signupForm.reset();
  }
}
