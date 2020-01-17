import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,FormArray,Validators } from '@angular/forms';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit {
   formVals;tableData;

  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    Address: new FormGroup({
                                    street:new FormControl('',Validators.required),
                                    city:new FormControl(''),
                                    state:new FormControl(''),
                                    zip:new FormControl('',Validators.required),
                                  })
  });
  onSubmit(){
    ajax('http://localhost:8761/getData').subscribe(dat=>{
        this.tableData=dat.response;
        console.log("Table data [Response] :====> ",this.tableData)
    })
    this.formVals=this.profileForm.value;
    console.log('form data : ',this.formVals)
  }
  

  constructor() { }

  ngOnInit() {
  }

}
