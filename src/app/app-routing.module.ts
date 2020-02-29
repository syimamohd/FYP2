import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'bookinghotel',
    loadChildren: () => import('./bookinghotel/bookinghotel.module').then( m => m.BookinghotelPageModule)
  },
  {
    path: 'bookingservice',
    loadChildren: () => import('./bookingservice/bookingservice.module').then( m => m.BookingservicePageModule)
  },
  {
    path: 'menuhotel',
    loadChildren: () => import('./menuhotel/menuhotel.module').then( m => m.MenuhotelPageModule)
  },
  {
    path: 'menuspa',
    loadChildren: () => import('./menuspa/menuspa.module').then( m => m.MenuspaPageModule)
  },
  {
    path: 'menugrab',
    loadChildren: () => import('./menugrab/menugrab.module').then( m => m.MenugrabPageModule)
  },
  {
    path: 'menuvaccine',
    loadChildren: () => import('./menuvaccine/menuvaccine.module').then( m => m.MenuvaccinePageModule)
  },
  {
    path: 'menugrab-admin',
    loadChildren: () => import('./menugrab-admin/menugrab-admin.module').then( m => m.MenugrabAdminPageModule)
  },
  {
    path: 'menuhotel-admin',
    loadChildren: () => import('./menuhotel-admin/menuhotel-admin.module').then( m => m.MenuhotelAdminPageModule)
  },
  {
    path: 'menuspa-admin',
    loadChildren: () => import('./menuspa-admin/menuspa-admin.module').then( m => m.MenuspaAdminPageModule)
  },
  {
    path: 'menuvaccine-admin',
    loadChildren: () => import('./menuvaccine-admin/menuvaccine-admin.module').then( m => m.MenuvaccineAdminPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
