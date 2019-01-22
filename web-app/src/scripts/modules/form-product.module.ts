import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormProductComponent } from '../components/form-product.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        FormProductComponent
    ],
    exports: [
        FormProductComponent
    ],
    bootstrap: [FormProductComponent]
})
export class FormProductModule { }