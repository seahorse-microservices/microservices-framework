import { Routes } from '@angular/router';

import { TextInterpolationComponent } from './ui/data-binding/text-interpolation/text-interpolation.component';
import { PropertyBindingComponent } from './ui/data-binding/property-binding/property-binding.component';
import { AttributeBindingComponent } from './ui/data-binding/attribute-binding/attribute-binding.component';
import { InputBindingComponent } from './ui/data-binding/input-binding/input-binding.component';
import { OutputBindingComponent } from './ui/data-binding/output-binding/output-binding.component';
import { TwoWayBindingComponent } from './ui/data-binding/two-way-binding/two-way-binding.component';
import { EventBindingComponent } from './ui/data-binding/event-binding/event-binding.component';
import { HelloComponent } from './ui/hello/hello.component';
import { ForDirectiveComponent } from './ui/directives/for-directive/for-directive.component'; 
import { IfDirectiveComponent } from './ui/directives/if-directive/if-directive.component';
import { SwitchDirectiveComponent } from './ui/directives/switch-directive/switch-directive.component';

import { NgmodelDirectiveComponent } from './ui/directives/ngmodel-directive/ngmodel-directive.component';
import { NgclassDirectiveComponent } from './ui/directives/ngclass-directive/ngclass-directive.component';
import { NgstyleDirectiveComponent } from './ui/directives/ngstyle-directive/ngstyle-directive.component';
import { FormComponent } from './ui/form/form.component';
import { PipesComponent } from './ui/pipes/pipes.component';
import { RegisterComponent } from './ui/angular-login-signin/register/register.component';
import { LoginComponent } from './ui/angular-login-signin/login/login.component';
import { AngularRbacComponent } from './ui/angular-rbac/angular-rbac.component';
import { CookieComponent } from './ui/cookie-token/cookie.component';
import { listComponent } from './ui/list/list.component';


export const routes: Routes = [
  { path: 'text-interpolation', component: TextInterpolationComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'attribute-binding', component: AttributeBindingComponent },
  { path: 'input-binding', component: InputBindingComponent },
  { path: 'output-binding', component: OutputBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'hello', component: HelloComponent},
  { path: 'for-directive', component: ForDirectiveComponent },
  { path: 'if-directive', component: IfDirectiveComponent },
  { path: 'switch-directive', component: SwitchDirectiveComponent },
  { path: 'ngmodel-directive', component: NgmodelDirectiveComponent },
  { path: 'ngclass-directive', component: NgclassDirectiveComponent },
  { path: 'ngstyle-directive', component: NgstyleDirectiveComponent },
  { path: 'form', component: FormComponent },
  { path: 'pipes', component: PipesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "angular-rbac", component: AngularRbacComponent },
  { path: "cookie", component: CookieComponent },
  { path: "list", component: listComponent },
];