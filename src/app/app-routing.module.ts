import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./user/account/components/layot/layout.component";

const routes: Routes = [
  {
    path: 'login/user',
    loadChildren: () => import('./user/account/account.module').then(m => m.UserAccountModule)
  },
  {
    path: 'cabinet',
    loadChildren: () => import('./user/cabinet/cabinet.module').then(m => m.UserCabinetModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
