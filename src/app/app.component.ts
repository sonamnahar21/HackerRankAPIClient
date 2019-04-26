import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/Observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(){
    // setTimeout(() => {
    //   console.log('refreshing');
    //   window.location.reload();
    // }, 300000); // Activate after 5 minutes.
  }

}
