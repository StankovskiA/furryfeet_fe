import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'hi',
    loadChildren: () =>
      import('./hello/hello.module').then((m) => m.HelloModule),
  },
  { path: 'home', component: HomePageComponent },
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'hi', loadChildren: () => import('./hello/hello.module').then(m => m.HelloModule) },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
