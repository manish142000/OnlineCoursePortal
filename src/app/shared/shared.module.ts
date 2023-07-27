import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {CdkAccordionModule} from '@angular/cdk/accordion';


@NgModule({
  declarations: [
    InputComponent,
    SidebarComponent,
    CatalogueComponent,
    MycoursesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatExpansionModule,
    CdkAccordionModule
  ],
  exports : [InputComponent, SidebarComponent, CatalogueComponent]
})
export class SharedModule {
    @ViewChild(MatAccordion) accordion: MatAccordion;
 }
