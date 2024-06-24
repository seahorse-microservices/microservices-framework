import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { TextInterpolationComponent } from './text-interpolation.component';

describe('TextInterpolationComponent', () => {
  let textInterpolationComponent: TextInterpolationComponent;
  let componentFixture: ComponentFixture<TextInterpolationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({imports: [TextInterpolationComponent]})
    .compileComponents();
  }));

  beforeEach(() => {
    componentFixture = TestBed.createComponent(TextInterpolationComponent);
    textInterpolationComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  });

  it('should create', () => {
    expect(textInterpolationComponent).toBeDefined();
  });

	it('should see title embeded into h3 tag', () => {
		const H3 = componentFixture.nativeElement.querySelector("h3");
		expect(textInterpolationComponent.title)
		.withContext('title embeded inside the <h3> tag')
		.toEqual(H3.textContent);
	});


  it('should see inputValue embeded in input tag', () => {
		const INPUT = componentFixture.nativeElement.querySelector("input");
		expect(textInterpolationComponent.inputValue)
		.withContext('inputValue embeded as a value inside the <input> tag')
		.toContain(INPUT.value);
	});


});