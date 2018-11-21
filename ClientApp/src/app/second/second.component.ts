import { Component, OnInit } from '@angular/core';
import { ColorBoxService } from '../color-box.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  private selectedColor: string;
  constructor(private colorboxService: ColorBoxService) { }

  ngOnInit() {
    this.colorboxService.castSelectedColor.subscribe(c => this.selectedColor = c);

  }

  public onEventLog(event: string, data: any): void {
    this.selectedColor = data;
    this.colorboxService.changeColor(data);
  }

}
