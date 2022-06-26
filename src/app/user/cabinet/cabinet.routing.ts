import {Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {CanActivateCabinet} from "./cabinet.guard";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate:[CanActivateCabinet],
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main'
      },
      {
        path: 'main',
        component: MainComponent
      }
    ]
  }
]
