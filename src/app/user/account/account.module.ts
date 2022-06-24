import {
  TuiPrimitiveTextfieldModule,
  TuiTextfieldControllerModule, TuiButtonModule
} from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RegistrationComponent} from "./components/registration/registration.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {routes} from "./account.routing";
import {LayoutComponent} from "./components/layot/layout.component";
import {TuiDataListWrapperModule, TuiInputModule, TuiSelectModule} from "@taiga-ui/kit";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./components/login/login.component";

@NgModule({
  declarations: [
    RegistrationComponent,
    LayoutComponent,
    LoginComponent
  ],
  exports: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TuiInputModule,
    TuiPrimitiveTextfieldModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiDataListWrapperModule,
    TuiButtonModule
  ],

  providers: [HttpClientModule]
})

export class UserAccountModule {}
