import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-httpc',
  templateUrl: './httpc.component.html',
  styleUrls: ['./httpc.component.css']
})
export class HttpcComponent implements OnInit {
  usersList=[];

  constructor(private trackService:TrackService) { }

  ngOnInit() {
    this.trackService.getUsersData()
    .subscribe(data=>{
      this.usersList=data;
    console.log(this.usersList)
    })
  }

}
