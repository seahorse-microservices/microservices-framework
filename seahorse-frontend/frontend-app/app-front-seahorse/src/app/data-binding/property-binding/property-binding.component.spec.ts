import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import { PropertyBindingComponent } from "./property-binding.component";

describe("PropertyBindingComponent", () => {
  let fixture: ComponentFixture<PropertyBindingComponent>;
  let propertyBindingComp: PropertyBindingComponent;
	let compInput: HTMLInputElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({imports: [PropertyBindingComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBindingComponent);
    propertyBindingComp = fixture.componentInstance;
		compInput = fixture.nativeElement.querySelector("#html-attr");
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(propertyBindingComp).toBeDefined();
  });

  it("input's value attribute should be null", () => {
		expect(compInput.getAttribute("value"))
		.withContext("unexpected input's value attribute")
		.toEqual(null);
  });

  it("after modifying input, second <p>'s text should be modified", () => {
		const secondParagraph = fixture.nativeElement.querySelector("div > p:nth-child(4)");
		compInput.value = "Another value";
		compInput.dispatchEvent(new Event('input'));
		fixture.detectChanges();
		expect(secondParagraph.textContent)
		.withContext("The second paragraph's text didn't change")
		.toEqual(`DOM property value: ${compInput.value}`);
  });
});