import { TestBed, getTestBed } from '@angular/core/testing';

import { ColorBoxService } from './color-box.service';
import { ColorBox } from './color-box';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppSettings } from './AppSettings';


describe('ColorBoxService', () => {
  let service: ColorBoxService;
  let injector: TestBed;
  let boxes: ColorBox[];
  let selectedColor: string;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    injector = getTestBed();
    service = injector.get(ColorBoxService);
    httpMock = injector.get(HttpTestingController);
    service.castColorBoxes.subscribe(b => boxes = b);
    service.castSelectedColor.subscribe(b => selectedColor = b);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();

  });

  it('should add ColorBox', () => {

    service.addNewColorBox(new ColorBox());
    expect(boxes.length).toEqual(1);

  });

  it('should Remove ColorBox', () => {

    service.addNewColorBox(new ColorBox());
    expect(boxes.length).toEqual(1);
    service.removeColorBox();
    expect(boxes.length).toEqual(0);

  });

  it('should change current selected color', () => {

    expect(selectedColor).toBe('#C82333');
    service.changeColor("red");
    expect(selectedColor).toBe("red");
  });

  it('should Select a box', () => {
    let box1: ColorBox = {
      id: 1,
      isSelected: false,
      color: "red"
    };

    let box2: ColorBox = {
      id: 2,
      isSelected: false,
      color: "green"
    };

    service.addNewColorBox(box1);
    service.addNewColorBox(box2);
    service.selectBox(box1);
    expect(box1.isSelected).toBeTruthy();
    expect(box2.isSelected).toBeFalsy();

  });

  it('should  Call to Save API', () => {
    service.saveCurrentUIState();
    const req = httpMock.expectOne(AppSettings.API_URL);
    expect(req.request.method).toBe("POST");

  });
});
