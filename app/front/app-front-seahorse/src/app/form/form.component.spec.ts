import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let fixture: ComponentFixture<FormComponent>;
  let app: FormComponent;
	let appFixture: HTMLElement;
  let appFixtureButton: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    app = fixture.componentInstance;
		appFixture = fixture.nativeElement;
		appFixtureButton = appFixture.querySelector("button") as HTMLButtonElement;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have a fullname', () => {
    let appFullname = appFixture.querySelector('input[formControlName="fullname"]') as HTMLInputElement;
    appFixtureButton.click();
    fixture.detectChanges();
    expect(appFullname.classList.toString()).toContain('is-invalid');
    appFullname.value = 'dcfgvh';
		appFullname.dispatchEvent(new Event("input"));
    appFixtureButton.click();
    fixture.detectChanges();
    expect(appFullname.classList.toString()).not.toContain('is-invalid');
  });

  it('should have an username', () => {
    let appUsername = appFixture.querySelector('input[formControlName="username"]') as HTMLInputElement;
    appFixtureButton.click();
    fixture.detectChanges();
    expect(appUsername.classList.toString()).toContain('is-invalid');
    appUsername.value = 'dcfgvh';
		appUsername.dispatchEvent(new Event("input"));
    appFixtureButton.click();
    fixture.detectChanges();
    expect(appUsername.classList.toString()).not.toContain('is-invalid');
  });

  it('should have a valid email', () => {
		let appEmail = appFixture.querySelector('input[formControlName="email"]') as HTMLInputElement;
    appFixtureButton.click();
    fixture.detectChanges();
    expect(appEmail.classList.toString()).toContain('is-invalid');
		appEmail.value = "invalid-email";
		appEmail.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(appEmail.classList.toString()).toContain('is-invalid');
		appEmail.value = "validemail@gmail.com";
		appEmail.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(appEmail.classList.toString()).not.toContain('is-invalid');
  });

  it('should have a password', () => {
    let appPassword = appFixture.querySelector('input[formControlName="password"]') as HTMLInputElement;
    appFixtureButton.click();
    fixture.detectChanges();
    expect(appPassword.classList.toString()).toContain('is-invalid');
    appPassword.value = 'dcfgvh';
		appPassword.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(appPassword.classList.toString()).not.toContain('is-invalid');
  });

  it('should have confirm password equal to password', () => {
		let appPassword = appFixture.querySelector('input[formControlName="password"]') as HTMLInputElement;
		let appConfirm = appFixture.querySelector('input[formControlName="confirmPassword"]') as HTMLInputElement;
		appPassword.value = "1234";
		appConfirm.value = "5678";
		appPassword.dispatchEvent(new Event("input"));
		appConfirm.dispatchEvent(new Event("input"));
		appFixtureButton.click();
		fixture.detectChanges();
    expect(appConfirm.classList.toString()).toContain('is-invalid');
		appPassword.value = "1234";
		appConfirm.value = "1234";
		appPassword.dispatchEvent(new Event("input"));
		appConfirm.dispatchEvent(new Event("input"));
		fixture.detectChanges();
    expect(appConfirm.classList.toString()).not.toContain('is-invalid');
  });
});