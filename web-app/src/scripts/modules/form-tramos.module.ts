import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormTramosComponent } from '../components/form-tramos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        FormTramosComponent
    ],
    exports: [
        FormTramosComponent
    ],
    bootstrap: [FormTramosComponent]
})
export class FormTramosModule { }