import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ColorBoxService } from './color-box.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    // During Unload event save the current UI state 
    this.colorBoxService.saveCurrentUIState();
  }

  constructor(private colorBoxService: ColorBoxService) {

  }

  ngOnInit() {

  }

  title = 'ColorBox';
}
