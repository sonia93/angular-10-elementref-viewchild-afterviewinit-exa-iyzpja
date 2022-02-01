import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {

  @ViewChild("myDiv") divView: ElementRef;

  ngAfterViewInit(){

    console.log(this.divView);
    this.divView.nativeElement.innerHTML = "Hello Angular 10!";

  }

}

