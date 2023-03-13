import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { IgViewComponent } from './ig-view/ig-view.component';
import { IgView1Component } from './ig-view1/ig-view1.component';
import { IgView2Component } from './ig-view2/ig-view2.component';
import { IgView3Component } from './ig-view3/ig-view3.component';

export const routes: Routes = [
  { path: '', redirectTo: 'ig-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'ig-view', component: IgViewComponent, data: { text: "\u041D\u0430\u0447\u0430\u043B\u043E" } },
  { path: 'ig-view1', component: IgView1Component, data: { text: "\u0421\u044A\u0431\u0438\u0442\u0438\u044F" } },
  { path: 'ig-view2', component: IgView2Component, data: { text: "\u041D\u043E\u0432\u0438\u043D\u0438" } },
  { path: 'ig-view3', component: IgView3Component, data: { text: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438" } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
