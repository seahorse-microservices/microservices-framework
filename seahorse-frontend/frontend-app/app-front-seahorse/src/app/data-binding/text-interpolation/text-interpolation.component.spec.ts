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

	it('should print the title in <h3> tag', () => {
		const H3 = componentFixture.nativeElement.querySelector("h3");
		expect(textInterpolationComponent.title).toEqual(H3.textContent);
	});

});