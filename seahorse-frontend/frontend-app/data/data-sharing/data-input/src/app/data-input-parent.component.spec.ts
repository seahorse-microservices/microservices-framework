import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import { DataInputParentComponent } from "./data-input-parent.component";

describe("DataInputParentComponent", () => {

  let dataInputParentComponent: DataInputParentComponent;
  let dataInputParentComponentFixture: ComponentFixture<DataInputParentComponent>;
  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({imports: [DataInputParentComponent]}).compileComponents();
  }));

  beforeEach(() => {
    dataInputParentComponentFixture = TestBed.createComponent(DataInputParentComponent);
    dataInputParentComponent = dataInputParentComponentFixture.componentInstance;
	dataInputParentComponentFixture.detectChanges();
  });

  it("should create", () => {
    expect(dataInputParentComponent).toBeDefined();
  });

  it("the <data-input-child> tag should be rendered", () => {
	let parentItem: string = dataInputParentComponentFixture.componentInstance.parentItem
	expect(parentItem).toEqual('this data comes from the parent component');
 });
});