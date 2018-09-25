import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
// imports and export stuff.
@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [CommonModule, MaterialModule, NavbarComponent, RouterModule],
  declarations: [NavbarComponent]
})
export class SharedModule { }
