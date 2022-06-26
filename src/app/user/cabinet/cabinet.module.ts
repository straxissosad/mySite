import {
  TuiPrimitiveTextfieldModule,
  TuiTextfieldControllerModule, TuiButtonModule
} from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {routes} from "./cabinet.routing";
import {TuiDataListWrapperModule, TuiInputModule, TuiSelectModule} from "@taiga-ui/kit";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MainComponent} from "./main/main.component";
import {CanActivateCabinet} from "./cabinet.guard";

@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
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
    TuiButtonModule,
  ],

  providers: [HttpClientModule, CanActivateCabinet]
})

export class UserCabinetModule {}
