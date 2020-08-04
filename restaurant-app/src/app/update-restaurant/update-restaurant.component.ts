import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  alert:boolean = false;
  editRestaurant= new FormGroup({
    name: new FormControl(''),
    Address: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private restro:CommonService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.restro.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      this.editRestaurant= new FormGroup({
        name: new FormControl(result['name']),
        Address: new FormControl(result['Address']),
        email: new FormControl(result['email'])
      })
  })
}
  updateRestro(){

    this.restro.updateRestro(this.router.snapshot.params.id, this.editRestaurant.value).subscribe((result)=>{

      console.log(result, "data Updated")
      this.alert=true;
    })
  }
    closeAlert(){
      this.alert=false;
    }
 
  }



