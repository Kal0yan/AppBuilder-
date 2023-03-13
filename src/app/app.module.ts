import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgViewComponent } from './ig-view/ig-view.component';
import { IgxListModule, IgxAvatarModule, IgxGridModule, IgxChipsModule, IgxCalendarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxSelectModule, IgxInputGroupModule, IgxToggleModule, IgxDropDownModule, IgxExpansionPanelModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxSwitchModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { IgView1Component } from './ig-view1/ig-view1.component';
import { IgView2Component } from './ig-view2/ig-view2.component';
import { IgView3Component } from './ig-view3/ig-view3.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IgViewComponent,
    IgView1Component,
    IgView2Component,
    IgView3Component
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxListModule,
    IgxAvatarModule,
    IgxGridModule,
    IgxChipsModule,
    IgxCalendarModule,
    FormsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxExpansionPanelModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    IgxSwitchModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
