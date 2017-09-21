import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule } from './toast/toast.module';

@NgModule({
    imports: [ CommonModule, ToastModule ],
    exports: [ ToastModule ]
})

export class CoreModule { 
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) { }
 }