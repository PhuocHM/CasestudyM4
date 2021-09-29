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
import { CelebritesInfoComponent } from './celebrites-info/celebrites-info.component';
import { ViralVideoComponent } from './viral-video/viral-video.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderMenuComponent,
    SidebarMenuComponent,
    CompanyComponent,
    CelebritesListComponent,
    TrainningComponent,
    ErrorPageComponent,
    CelebritesInfoComponent,
    ViralVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
