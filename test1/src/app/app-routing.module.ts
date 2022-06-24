import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTestComponent } from './create-test/create-test.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { TestListComponent } from './test-list/test-list.component';
import { UpdateTestComponent } from './update-test/update-test.component';

const routes: Routes = [
{path: 'tests', component: TestListComponent},
{path: 'create', component: CreateTestComponent},
{path: '', redirectTo: 'tests', pathMatch: 'full'},
{path: 'update/:id', component: UpdateTestComponent},
{path: 'details/:id', component: TestDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
