import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPage } from '../detail/detail.page';
import { NewProductPage } from '../new-product/new-product.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: ':id',
    loadChildren: () => import('../detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path:'/new-product',
    component:NewProductPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
