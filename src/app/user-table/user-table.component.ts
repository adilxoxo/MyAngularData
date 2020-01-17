import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { TrackService } from '../track.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  varId = "";

  constructor(private SpinnerService: NgxSpinnerService,private fb:FormBuilder,private trackService:TrackService) { }  

  checkoutForm = this.fb.group({
    firstname: '',
    lastname: ''
  });
  onSubmit1(customerData) {
    alert("Adil choms 2")
    console.log(customerData.value)
    this.trackService.userdata;
  }

  public ngOnInit() { 
    this.getData();
  }

  getData(){
    this.SpinnerService.show();
    var selfng = this;
    this.dtOptions = {
      ajax: {
        "url": "http://localhost:8761/getData",
        "type": "POST",
        "dataType": 'json'
      },
      columns: [{
        title: 'Key',
        data: 'key'
      }, {
        title: 'First name',
        data: 'name'
      }, {
        title: 'Last name',
        data: 'lastname'
      },{
        data : null,
        className : "center",
        defaultContent : "<center><button class='btn btn-primary edit' data-toggle='modal' data-target='#modelEditUser'>Edit User</button></center>"
      },
      {
        data: null,
        className: "center",
        defaultContent: "<center><button class='btn btn-primary delete' >Delete User</button></center>"
      }
    ]
    };
    this.SpinnerService.hide();
    $('#idDataTable').on("click", ".delete", function(){
      selfng.SpinnerService.show();
      const self = this;
      $.ajax({url: "http://localhost:8761/deleteData",type: "POST",
        data : JSON.stringify({key:$(this).closest("tr").find("td:first").text()}),
        dataType: 'json',headers: {
        'Content-Type': 'application/json; charset=utf8'
        }, success: function(result){
          $(self).closest("tr").remove();
          selfng.SpinnerService.hide();
        }
      });
    });

    $('#idDataTable').on("click", ".edit", function(){
      var $row = $(this).closest("tr");
      selfng.varId = $row.find("td")[0].innerHTML;
      var name = $row.find("td")[1].innerHTML;
      var lastName = $row.find("td")[2].innerHTML;
       $("#idName").val(name);
       $("#idLastName").val(lastName);
    });
  }
  
  saveUser(formId : string){
    const self = this;
    var el = document.querySelector("form[id='"+formId+"']");
    var inputs = el.querySelectorAll('input');
    debugger
    var data = {};
    for(var i=0; i< inputs.length; i++){
      data[inputs[i].name] = inputs[i].value;
    }
    var url = "";
   if(self.varId == ""){
        url = "http://localhost:8761/setData";
   }
   else{
      data["key"] = self.varId;
      url = "http://localhost:8761/updateUser";
   }
       
   self.SpinnerService.show();
    $.ajax({url:url,type: "POST",
		data : JSON.stringify(data),
	  dataType: 'json',headers: {
			'Content-Type': 'application/json; charset=utf8'
		}, success: function(result){
        //self.getData();
      $("#myModal .close").click()
      self.SpinnerService.hide();
      location.reload();
		}});
  }
}
