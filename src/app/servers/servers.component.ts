import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', // USING STANDARD/CUSTOM TAG FOR COMPONENT SELECTOR
  //selector: '.app-servers', // USING CLASS FOR COMPONENT SELECTOR 
  selector: '[app-servers]', // USING CSS ATTRIBUTE FOR COMPONENT SELECTOR
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

}
