import { ComponentFixture, TestBed } from '@angular/core/testing';
import { listComponent } from './list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { User } from './user';

describe('ListComponent', () => {
	let appCompFixture: ComponentFixture<listComponent>;
	let appCompInstance: listComponent;
	let httpTestController: HttpTestingController;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [listComponent, HttpClientTestingModule],
		}).compileComponents();
		appCompFixture = TestBed.createComponent(listComponent);
		appCompInstance = appCompFixture.componentInstance;
		httpTestController = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpTestController.verify();
	})

	it('should create the app', () => {
		expect(appCompInstance).toBeTruthy();
	});

	it('The HTTP request retrieves users', () => {
		const mockUserArray: User[] = [{
			id: 1,
			name: "Leanne Graham",
			username: "Bret",
			email: "Sincere@april.biz",
			address: { street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874", geo: { lat: "-37.3159", lng: "81.1496" }},
			phone: "1-770-736-8031 x56442",
			website: "hildegard.org",
			company: { name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets" },
		}];
		

		appCompInstance.getUsersFromComponent()
		
		const mockRequest = httpTestController.expectOne("https://jsonplaceholder.typicode.com/users");
		mockRequest.flush(mockUserArray);
		expect(appCompInstance.users).toBe(mockUserArray);
	});
});