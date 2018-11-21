import { Component, OnInit } from '@angular/core';
import { ColorBoxService } from '../color-box.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  boxCount: number;
  currentColor: string;
  constructor(private colorboxService: ColorBoxService) { }

  ngOnInit() {
    this.colorboxService.castColorBoxes.subscribe(b => this.boxCount = b.length);
    this.colorboxService.castSelectedColor.subscribe(c => this.currentColor = c);

  }
}
