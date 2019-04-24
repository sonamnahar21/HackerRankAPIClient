import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor ( private route: ActivatedRoute, private http: Http ) {}
  title = 'hackerrank';
  id: string;
  apiurl = 'http://localhost:8080/custom-ranking/getalltestcandidate?test_id=';
  data: any = {};
  settings = {
    actions: false,
    columns: {
      idx: {
        title: 'Rank',
        valuePrepareFunction: (value, row, cell) => {
          return cell.row.index + 1;
        }
      },
      id: {
        title: 'ID'
      },
      fullName: {
        title: 'Full Name'
      },
      attemptStarttime: {
        title: 'Start Time',
        valuePrepareFunction: (attemptStarttime) => {
          const event = new Date(attemptStarttime);
          return `${event.toLocaleTimeString()}`;
        }
      },
      attemptEndtime: {
        title: 'End Time',
        valuePrepareFunction: (attemptEndtime) => {
          const event = new Date(attemptEndtime);
          return `${event.toLocaleTimeString()}`;
        }
      },
      score: {
        title: 'Score'
      },
    }
  };
  ngOnInit(): void {
    this.id  = this.route.snapshot.paramMap.get('id');
    console.log('in custructor ' + this.id);
    this.apiurl = this.apiurl + this.id;
    console.log(this.apiurl);
    this.getData();
    this.getResponse();
  }
  getResponse() {
   return this.http.get(this.apiurl).pipe(map(res => res.json()));
  }
  getData() {
    this.getResponse().subscribe(data => {
      console.log(data);
      this.data = data.message;
  });
  }

}
