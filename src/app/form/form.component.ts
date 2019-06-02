import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userName: string = "";
  userAddress1: string = "";
  userAddress2: string = "";
  userStare: string="Ukraine";
  userCity: string = "";
  userZipCode: string = "";
  errorName: boolean = false;
  errorAddress: boolean = false;
  errorCity: boolean = false;
  errorZipCode: boolean = false;
  doneSent: boolean = false 
 // myForm : FormGroup;                                   //And It`s

  constructor() {
    /*this.myForm = new FormGroup({                       //   This handler works automatically,
      "userName": new FormControl("", [                   //   without clicking on the "OK" button.
        Validators.required,                              //   To get started, you need to uncomment  is the code  
        Validators.pattern("[A-Za-zА-Яа-яЁё]{1,100}")     //   in the constructor, and code in `form.component.html` file
    ]),                                                   
    "userAddress1": new FormControl("", Validators.required),
    "userCity": new FormControl("", Validators.required),
    "userZipCode": new FormControl("", [
      Validators.required, 
      Validators.pattern("[0-9]{5}") 
    ])
    });*/
   }

  validationSent(){
    this.errorName = false;
    this.errorAddress = false;
    this.errorCity = false;
    this.errorZipCode = false;
    const alpha = /^[a-zа-яё]+$/i;
    const numb = /[0-9]{5}/

    if(this.userName =="" || this.userName == " " || alpha.test(this.userName) ==  false)
      this.errorName = true;
    else if(this.userAddress1 == "" || this.userAddress1 == " ")
      this.errorAddress = true;
    else if (this.userCity =="" || this.userCity == " ")
      this.errorCity = true;
    else if (this.userZipCode == "" || this.userZipCode == " " || numb.test(this.userZipCode)==false )
      this.errorZipCode = true;
    else{
      let youSent = {
        userName: this.userName,
        userAddress: this.userAddress1,
        userAddress2: this.userAddress2,
        userCity: this.userCity,
        userStare: this.userStare,
        userZipCode: this.userZipCode
      };
      this.doneSent = true;
      
      console.log(youSent);
    }
  }

  cancel(){
    this.userName = "";
    this.userAddress1 = "";
    this.userAddress2 = "";
    this.userCity = "";
    this.userZipCode = "";
    this.errorName = false;
    this.errorAddress = false;
    this.errorCity = false;
    this.errorZipCode = false;
    this.doneSent = false;
  }

  ngOnInit() {
  }

}
