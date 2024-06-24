import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import { InputBindingComponent } from "./input-binding.component";

describe("InputBindingComponent", () => {
  let inputBindingComponent: InputBindingComponent;
  let fixture: ComponentFixture<InputBindingComponent>;
  let hTMLParagraphElement: HTMLParagraphElement;
  
	beforeEach(() => {
    TestBed.configureTestingModule({imports: [InputBindingComponent]}).compileComponents();
    fixture = TestBed.createComponent(InputBindingComponent);
    inputBindingComponent = fixture.componentInstance;
	  fixture.detectChanges();
    hTMLParagraphElement = fixture.nativeElement.querySelector("app-sizer p:nth-child(3)");
  });

  it('should be Truthy', () => {
    expect(inputBindingComponent).toBeTruthy();
  });

  it("should be defined", () => {
    expect(inputBindingComponent).toBeDefined();
  });

	it("the font size of Sizer's FontSize paragraph should be given by its parent", () => {
		
 		expect(hTMLParagraphElement.style.fontSize).toEqual(`${inputBindingComponent.fontSizePx}px`);
	});
});