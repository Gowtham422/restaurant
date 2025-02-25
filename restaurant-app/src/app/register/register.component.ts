import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert:boolean = false;
  
  createUser= new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private restro:CommonService) { }

  ngOnInit(): void {
  }

  regUser(){
    console.log(this.createUser.value);
    this.restro.createUser(this.createUser.value).subscribe((result)=>{
      console.log(result,"data created successfully")
    })

  }
 

}
