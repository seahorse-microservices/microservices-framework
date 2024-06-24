import {ComponentFixture, TestBed} from "@angular/core/testing";
import { EventBindingComponent } from "./event-binding.component";

describe("EventBindingComponent", () => {
  
  let componentFixture: ComponentFixture<EventBindingComponent>;
  let eventBindingComponent: EventBindingComponent;
  let clickCounter: number; 
  let hTMLButtonElementIncrement: HTMLButtonElement;
  let hTMLButtonElementDecrement : HTMLButtonElement; 
    
  
  beforeEach(() => {

    TestBed.configureTestingModule({imports: [EventBindingComponent]})
    .compileComponents();
    componentFixture = TestBed.createComponent(EventBindingComponent);
    eventBindingComponent = componentFixture.componentInstance;
		componentFixture.detectChanges();
    clickCounter = eventBindingComponent.clickCounter;
    hTMLButtonElementIncrement = 
    componentFixture.nativeElement.querySelector("button[title='bigger']");
    hTMLButtonElementDecrement = 
    componentFixture.nativeElement.querySelector("button[title='smaller']");

  });

  it('should be Truthy', () => {
    expect(eventBindingComponent).toBeTruthy();
  });

  it("should be defined", () => {
    expect(eventBindingComponent).toBeDefined();
  });

  it("should increment the clickCount property", () => {
    hTMLButtonElementIncrement.click();
		expect(eventBindingComponent.clickCounter).toBe(1);
  });

  it("should decrement the clickCount property", () => {
    hTMLButtonElementDecrement.click();
		expect(eventBindingComponent.clickCounter).toBe(-1);
  });

});