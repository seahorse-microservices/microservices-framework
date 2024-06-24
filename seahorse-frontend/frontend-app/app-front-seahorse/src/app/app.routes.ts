import { Routes } from '@angular/router';

import { TextInterpolationComponent } from './data-binding/text-interpolation/text-interpolation.component';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';
import { AttributeBindingComponent } from './data-binding/attribute-binding/attribute-binding.component';
import { InputBindingComponent } from './data-binding/input-binding/input-binding.component';
import { OutputBindingComponent } from './data-binding/output-binding/output-binding.component';
import { TwoWayBindingComponent } from './data-binding/two-way-binding/two-way-binding.component';
import { EventBindingComponent } from './data-binding/event-binding/event-binding.component';

import { ForDirectiveComponent } from './directives/for-directive/for-directive.component'; 
import { IfDirectiveComponent } from './directives/if-directive/if-directive.component';
import { SwitchDirectiveComponent } from './directives/switch-directive/switch-directive.component';

import { NgmodelDirectiveComponent } from './directives/ngmodel-directive/ngmodel-directive.component';
import { NgclassDirectiveComponent } from './directives/ngclass-directive/ngclass-directive.component';
import { NgstyleDirectiveComponent } from './directives/ngstyle-directive/ngstyle-directive.component';
import { FormComponent } from './form/form.component';
import { PipesComponent } from './pipes/pipes.component';

import { listComponent } from './list/list.component';


export const routes: Routes = [
  { path: 'text-interpolation', component: TextInterpolationComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'attribute-binding', component: AttributeBindingComponent },
  { path: 'input-binding', component: InputBindingComponent },
  { path: 'output-binding', component: OutputBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'for-directive', component: ForDirectiveComponent },
  { path: 'if-directive', component: IfDirectiveComponent },
  { path: 'switch-directive', component: SwitchDirectiveComponent },
  { path: 'ngmodel-directive', component: NgmodelDirectiveComponent },
  { path: 'ngclass-directive', component: NgclassDirectiveComponent },
  { path: 'ngstyle-directive', component: NgstyleDirectiveComponent },
  { path: 'form', component: FormComponent },
  { path: 'pipes', component: PipesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: "list", component: listComponent },
];