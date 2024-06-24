import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import { DataInputChildComponent } from "./data-input-child.component";

describe("DataInputChildComponent", () => {
  let dataInputChildComponent: DataInputChildComponent;
  let dataInputChildComponentFixture: ComponentFixture<DataInputChildComponent>;
  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({imports: [DataInputChildComponent]}).compileComponents();
  }));

  beforeEach(() => {
    dataInputChildComponentFixture = TestBed.createComponent(DataInputChildComponent);
    dataInputChildComponent = dataInputChildComponentFixture.componentInstance;
	dataInputChildComponentFixture.detectChanges();
  });

  it("should create", () => {
    expect(dataInputChildComponent).toBeDefined();
  });

  it("the <p> tag should be rendered", () => {
	let paragraph: HTMLParagraphElement = dataInputChildComponentFixture.nativeElement.querySelector("p");
	expect(paragraph.textContent).toEqual('The child item is: pepe');
  });
});