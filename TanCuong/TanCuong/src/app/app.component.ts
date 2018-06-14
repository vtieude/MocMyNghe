import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  greetings = '';
  constructor(private _appService: AppService) { }
  apiValues: string[] = [];
  ngOnInit(): void {
    this._appService.sayHello()
      .subscribe(
      result => {
        this.greetings = result;
      }
      );
  }
}
