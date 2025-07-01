import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { CategoryComponent } from './components/category/category.component';

//buraya yazılan rootlar rooter-outlette ne gösterilmesi gerektigini söyler
const routes: Routes = [
  {path:" ", pathMatch:'full', component:CustomerComponent},
  {path:"category", component:CategoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }