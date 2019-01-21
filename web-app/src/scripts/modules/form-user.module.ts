import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormUserComponent } from '../components/form-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        FormUserComponent
    ],
    exports: [
        FormUserComponent
    ],
    bootstrap: [FormUserComponent]
})
export class FormUserModule { }