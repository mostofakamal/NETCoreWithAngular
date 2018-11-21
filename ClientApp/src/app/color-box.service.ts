import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { ColorBox } from './color-box';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ColorBoxResponseVm } from './ColorBoxResponseVm';
import { AppSettings } from './AppSettings';

@Injectable({
  providedIn: 'root'
})
export class ColorBoxService {

  private colorBoxResponseVm: ColorBoxResponseVm;
  private selectedColor = new BehaviorSubject<string>('#C82333');
  private colorBoxes = new BehaviorSubject<ColorBox[]>([]);
  castSelectedColor = this.selectedColor.asObservable();
  castColorBoxes = this.colorBoxes.asObservable();
  
  constructor(private http: HttpClient) {
    // Call the API to Get the Current UI State
    this.getCurrentUIState();
  }

  changeColor(newColor) {
    this.selectedColor.next(newColor);
    var selectedBox = this.getCurrentSelectedBox();
    if (selectedBox != undefined) {
      selectedBox.color = newColor;
    }
  }

  addNewColorBox(box: ColorBox) {
    this.colorBoxes.next(this.colorBoxes.getValue().concat(box));
  }

  getCurrentSelectedBox(): ColorBox {
    return this.colorBoxes.getValue().find(x => x.isSelected === true);
  }

  removeColorBox() {
    var selectedBox = this.getCurrentSelectedBox();
    if (selectedBox != undefined) {
      this.colorBoxes.getValue().splice(this.colorBoxes.getValue().indexOf(selectedBox), 1);
    }
    else {
      this.colorBoxes.getValue().pop();
    }
  }

  selectBox(box: ColorBox) {
    var selectedBox = this.getCurrentSelectedBox();
    if (selectedBox != undefined) {
      selectedBox.isSelected = false;
      if (box.id != selectedBox.id) {
        box.isSelected = true;
      }
    }
    else {
      box.isSelected = true;
    }
  }

  getCurrentUIState() {
    
    this.http.get<ColorBoxResponseVm>(AppSettings.API_URL)
      .subscribe(data => {
        this.colorBoxResponseVm = data;
        if (data.boxes != null) {
          this.colorBoxes.next(Object.assign({}, this.colorBoxResponseVm).boxes);
        }
        if (data.selectedColor != null) {
          this.selectedColor.next(Object.assign({}, this.colorBoxResponseVm).selectedColor);
        }

      }, error => console.log('Could not load ColorBox Data.'));

  }

  saveCurrentUIState() {

    this.http.post(AppSettings.API_URL, {
      "SelectedColor": this.selectedColor.getValue(),
      "Boxes": this.colorBoxes.getValue()
    })
      .subscribe(
        data => {
          console.log("Ui state Saved", data);
        },
        error => {
          console.log("Error", error);
        }
      );
  }
}
