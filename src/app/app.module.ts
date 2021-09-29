import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { CompanyComponent } from './company/company.component';
import { CelebritesListComponent } from './celebrites-list/celebrites-list.component';
import { AppRoutingModule } from './app-routing.module';
import { TrainningComponent } from './trainning/trainning.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderMenuComponent,
    SidebarMenuComponent,
    CompanyComponent,
    CelebritesListComponent,
    TrainningComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
