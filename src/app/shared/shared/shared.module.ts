import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { HttpClientModule } from '@angular/common/http';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,HttpClientModule,FormsModule,
    [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatFormFieldModule ]
  ],
  exports:[
    ReactiveFormsModule,HttpClientModule,FormsModule,
    [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatError, MatFormFieldModule],CommonModule
  ],
})
export class SharedModule { }
