import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponentComponent} from './test-component/test-component.component';


const routes: Routes = [{path: 'test/:id', component: TestComponentComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
