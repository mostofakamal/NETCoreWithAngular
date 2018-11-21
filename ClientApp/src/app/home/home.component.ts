import { Component, OnInit } from '@angular/core';
import { ColorBoxService } from '../color-box.service'
import { ColorBox } from '../color-box';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private boxes: ColorBox[];
  private selectedColor: string;
  
  constructor(private colorBoxService: ColorBoxService) {

  }


  ngOnInit() {
    this.colorBoxService.castColorBoxes.subscribe(b => this.boxes = b);
    this.colorBoxService.castSelectedColor.subscribe(c => this.selectedColor = c);
  }

  addBox() {
    let box = new ColorBox();
    box.id = this.boxes.length + 1;
    box.color = this.selectedColor;
    this.colorBoxService.addNewColorBox(box);
  }

  deleteBox() {
    this.colorBoxService.removeColorBox();
  }

  selectBox(box: ColorBox) {
    this.colorBoxService.selectBox(box);
  }

}
