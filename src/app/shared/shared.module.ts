import { NgModule, ModuleWithProviders } from '@angular/core';
 import { HelperService } from "./services/helper.service";
 import { ToastModule } from 'ng2-toastr';

@NgModule({
    imports: [
        ToastModule
    ],
    declarations: [],
    providers: [],
    exports: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: SharedModule,
        providers: [
          HelperService,
        ]
      };
    }
  }