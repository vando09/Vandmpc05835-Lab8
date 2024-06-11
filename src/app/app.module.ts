import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './pages/product/product.component';
import { HeaderComponent } from './pages/header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './pages/page.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteComponent } from './pages/unit/delete/delete.component';
import { CreateComponent } from './pages/unit/create/create.component';
import { EditComponent } from './pages/unit/edit/edit.component';
import { UnitComponent } from './pages/unit/unit.component';
import { PaginatorComponent } from './@theme/component/paginator/paginator.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    LoginComponent,
    PageComponent,
    DeleteComponent,
    CreateComponent,
    EditComponent,
    UnitComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
