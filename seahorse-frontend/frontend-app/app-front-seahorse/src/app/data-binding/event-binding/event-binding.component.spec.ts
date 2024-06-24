import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import { EventBindingComponent } from "./event-binding.component";

describe("EventBindingComponent", () => {
  let fixture: ComponentFixture<EventBindingComponent>;
  let eventBindingComp: EventBindingComponent;
  
  beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({imports: [EventBindingComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindingComponent);
    eventBindingComp = fixture.componentInstance;
		fixture.detectChanges();
  });

  it("should create", () => {
    expect(eventBindingComp).toBeDefined();
  });

  it("clicking on the buttons should change the component's clickCount property in their way", () => {
		const auxClickCount = eventBindingComp.clickCount;
		const btnDecrement = fixture.nativeElement.querySelector("button[title='smaller']") as HTMLButtonElement;
		const btnIncrement = fixture.nativeElement.querySelector("button[title='bigger']") as HTMLButtonElement;
		btnDecrement.click();
		expect(eventBindingComp.clickCount)
		.withContext("unexpected clickCount at eventBindingComp after dec()")
		.toBeLessThan(auxClickCount);
		btnIncrement.click();
		expect(eventBindingComp.clickCount)
		.withContext("unexpected clickCount at eventBindingComp after inc()")
		.toBe(auxClickCount);
  });
});