import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatTableModule,
        MatCardModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatToolbarModule,
        MatRadioModule,
        MatButtonModule,
        MatStepperModule,
    ],
    exports: [
        CommonModule,
        MatTableModule,
        MatSortModule,
        MatMenuModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatGridListModule,
        MatIconModule,
        MatSelectModule,
        MatRadioModule,
        MatButtonModule,
        MatToolbarModule,
        MatStepperModule
    ]
})
export class NgMaterialModule { }
