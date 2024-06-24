import {ComponentFixture, TestBed, fakeAsync, tick, waitForAsync} 
from "@angular/core/testing";
import { AttributeBindingComponent } from "./attribute-binding.component";

describe("AttributeBindingComponent", () => {
  let attributeBindingComponent: AttributeBindingComponent;
  let componentFixture: ComponentFixture<AttributeBindingComponent>;
	let hTMLInputElement: HTMLInputElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({imports: [AttributeBindingComponent]})
    .compileComponents();
  }));

  beforeEach(() => {
    componentFixture = TestBed.createComponent(AttributeBindingComponent);
    attributeBindingComponent = componentFixture.componentInstance;
		hTMLInputElement = componentFixture.nativeElement.querySelector("#html-attr");
    componentFixture.detectChanges();
  });

  it("should create", () => {
    expect(attributeBindingComponent).toBeDefined();
  });

  it("hTMLInputElement's value attribute should be equal to inputValue", () => {
		expect(hTMLInputElement.getAttribute("value"))
		.withContext("Expected hTMLInputElement's initial value be equal to inputValue")
		.toBe(attributeBindingComponent.inputValue);
  });

  it("after modify input, we should see <p id=attribute>'s text unchanged and <p id=property>'s text modified", () => {
		const PARAGRAPHS = componentFixture.nativeElement.querySelectorAll("p");
		const P1 = PARAGRAPHS[1];
		const P2 = PARAGRAPHS[2];
		
		hTMLInputElement.value = "Another value";
		hTMLInputElement.dispatchEvent(new Event('input'));
		componentFixture.detectChanges();
  
		expect(P1.textContent)
		.withContext("The first paragraph's text changed")
		.toEqual(`HTML attribute value: ${hTMLInputElement.getAttribute("value")} (static)`);
  
		expect(P2.textContent)
		.withContext("The second paragraph's text didn't change")
		.not.toEqual(`DOM property value: ${attributeBindingComponent.inputValue}`);
  });

  
});