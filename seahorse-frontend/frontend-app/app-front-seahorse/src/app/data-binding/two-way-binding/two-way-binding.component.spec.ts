import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import { TwoWayBindingComponent } from "./two-way-binding.component";
import { SizerComponent } from "../sizer/sizer.component";
import { By } from "@angular/platform-browser";

describe("TwoWayBindingComponent", () => {
  let twoWayBindingFixt: ComponentFixture<TwoWayBindingComponent>;
  let twoWayBindingComp: TwoWayBindingComponent;
  
	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({imports: [TwoWayBindingComponent]}).compileComponents();
  }));

	beforeEach(() => {
    twoWayBindingFixt = TestBed.createComponent(TwoWayBindingComponent);
    twoWayBindingComp = twoWayBindingFixt.componentInstance;
		twoWayBindingFixt.detectChanges();
  });

  it("should create", () => {
    expect(twoWayBindingComp).toBeDefined();
  });

	it("the font size should be two-way binded", () => {
		const sizerElement = twoWayBindingFixt.debugElement.query(By.directive(SizerComponent));
		const sizerComp = sizerElement.componentInstance as SizerComponent;
		const btnDecrement = sizerElement.nativeElement.querySelector("button[title='smaller']") as HTMLButtonElement;
		const btnIncrement = sizerElement.nativeElement.querySelector("button[title='bigger']") as HTMLButtonElement;

		expect(sizerComp.size)
		.withContext("initial sizerComp's size compared to twoWayBindingComp's one")
		.toBe(twoWayBindingComp.fontSizePx);
		btnDecrement.click();
		expect(twoWayBindingComp.fontSizePx)
		.withContext("expected twoWayBindingComp's fontSizePx after sizerComp's dec()")
		.toBe(Number(sizerComp.size));
		btnIncrement.click();
		expect(twoWayBindingComp.fontSizePx)
		.withContext("expected twoWayBindingComp's fontSizePx after sizerComp's inc()")
		.toBe(Number(sizerComp.size));
	});
});