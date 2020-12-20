import {NgModule} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatToolbarModule
  ]
})
export class MaterialModule {}
