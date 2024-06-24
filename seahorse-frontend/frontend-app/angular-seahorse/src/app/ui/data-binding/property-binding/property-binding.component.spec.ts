import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import { PropertyBindingComponent } from "./property-binding.component";

describe("PropertyBindingComponent", () => {
    let componentFixture: ComponentFixture<PropertyBindingComponent>; 
    let propertyBindingComponent: PropertyBindingComponent; 
    let compiled: any;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({imports: [PropertyBindingComponent]}).compileComponents();
    componentFixture = TestBed.createComponent(PropertyBindingComponent);
    componentFixture.detectChanges();
    compiled = componentFixture.debugElement.nativeElement;
    propertyBindingComponent = componentFixture.componentInstance;
  }));

  it("should be Truthy", () => {
    expect(propertyBindingComponent).toBeTruthy();
  });

  it("should be defined", () => {
    expect(propertyBindingComponent).toBeDefined();
  });

  it("should be inputValue equal to 'Property Binding'", () => {
    expect(propertyBindingComponent.inputValue).toEqual('Property Binding');
  });

  it("should render inputValue in a input tag", () => {
  	  expect(compiled.querySelector('input').value).toContain('Property Binding');

      expect(compiled.querySelector('#property-input').value).toContain('Property Binding');
    });



});