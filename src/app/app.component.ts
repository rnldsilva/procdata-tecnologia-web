import { Component, OnInit } from '@angular/core';
declare function initAll(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProcdataTecnologia.Web';
  public year: number;

  constructor() {
    // initAll();
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {
    initAll();
  }
}
