import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DemoMaterialModule} from './material-module';
import { ContratistaListComponent } from './components/contratista-list/contratista-list.component';
import { ContratistaDetailComponent } from './components/contratista-detail/contratista-detail.component';
import { ContratistaUpdateComponent } from './components/contratista-update/contratista-update.component'; 
import { CdkColumnDef } from '@angular/cdk/table';
import { ContratistaCreateComponent } from './components/contratista-create/contratista-create.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContratistaListComponent,
    ContratistaDetailComponent,
    ContratistaUpdateComponent,
    ContratistaCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    HttpClientModule

  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
