import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewProductPage } from './new-product.page';

const routes: Routes = [
  {
    path: '',
    component: NewProductPage
  },
  {
    path: '/new-product',
    component: NewProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewProductPageRoutingModule {}
