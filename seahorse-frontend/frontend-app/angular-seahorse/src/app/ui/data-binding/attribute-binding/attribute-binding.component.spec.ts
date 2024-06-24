import {ComponentFixture, TestBed, fakeAsync, tick, waitForAsync} 
from "@angular/core/testing";
import { AttributeBindingComponent } from "./attribute-binding.component";

describe("AttributeBindingComponent", () => {
  let attributeBindingComponent: AttributeBindingComponent;
  let componentFixture: ComponentFixture<AttributeBindingComponent>;
	let hTMLInputElement: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [AttributeBindingComponent]}).compileComponents();
    componentFixture = TestBed.createComponent(AttributeBindingComponent);
    attributeBindingComponent = componentFixture.componentInstance;
		hTMLInputElement = componentFixture.nativeElement.querySelector("#attribute-input");
    componentFixture.detectChanges();
  });

  it('should be Truthyt', () => {
    expect(attributeBindingComponent).toBeTruthy();
  });

  it("should be defined", () => {
    expect(attributeBindingComponent).toBeDefined();
  });

  it("should render inputValue in the id=attribute-input", () => {
		expect(hTMLInputElement.getAttribute("value")).toBe(attributeBindingComponent.inputValue);
    expect(hTMLInputElement.getAttribute("value")).toBe('Attribute Binding');
  });
  
});