import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',
   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
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
  },
  {
    path: 'receipthotel',
    loadChildren: () => import('./receipthotel/receipthotel.module').then( m => m.ReceipthotelPageModule)
  },
  {
    path: 'receiptservice',
    loadChildren: () => import('./receiptservice/receiptservice.module').then( m => m.ReceiptservicePageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/firebase.service')
  },
  {
    path: 'model',
    loadChildren: () => import('./model/Note')
  },
  {
    path: 'model',
    loadChildren: () => import('./model/CatHotel')
  },
  {
    path: 'model',
    loadChildren: () => import('./model/CatSpa')
  },
  {
    path: 'model',
    loadChildren: () => import('./model/CatVaccine')
  },
  {
    path: 'model',
    loadChildren: () => import('./model/CatGrab')
  },
  {
    path: 'model',
    loadChildren: () => import('./model/CatProduct')
  },
  {
    path: 'model',
    loadChildren: () => import('./model/CatVaccine')
  },
  {
    path: 'model',
    loadChildren: () => import('./model/BookingHotel')
  },
  {
    path: 'model',
    loadChildren: () => import('./model/BookingSpa')
  },
  {
    path: 'model',
    loadChildren: () => import('./model/BookingVacc')
  },
  {
    path: 'add-note',
    loadChildren: () => import('./add-note/add-note.module').then( m => m.AddNotePageModule)
  },
  {
    path: 'view-note/:id',
    loadChildren: () => import('./view-note/view-note.module').then( m => m.ViewNotePageModule)
  },
  {
    path: 'update-note/:id',
    loadChildren: () => import('./update-note/update-note.module').then( m => m.UpdateNotePageModule)
  },
  {
    path: 'add-hotel',
    loadChildren: () => import('./add-hotel/add-hotel.module').then( m => m.AddHotelPageModule)
  },
  {
    path: 'view-hotel/:id',
    loadChildren: () => import('./view-hotel/view-hotel.module').then( m => m.ViewHotelPageModule)
  },
  {
    path: 'update-hotel/:id',
    loadChildren: () => import('./update-hotel/update-hotel.module').then( m => m.UpdateHotelPageModule)
  },
  {
    path: 'add-spa',
    loadChildren: () => import('./add-spa/add-spa.module').then( m => m.AddSpaPageModule)
  },
  {
    path: 'view-spa/:id',
    loadChildren: () => import('./view-spa/view-spa.module').then( m => m.ViewSpaPageModule)
  },
  {
    path: 'update-spa/:id',
    loadChildren: () => import('./update-spa/update-spa.module').then( m => m.UpdateSpaPageModule)
  },
  {
    path: 'add-vaccine',
    loadChildren: () => import('./add-vaccine/add-vaccine.module').then( m => m.AddVaccinePageModule)
  },
  {
    path: 'view-vaccine/:id',
    loadChildren: () => import('./view-vaccine/view-vaccine.module').then( m => m.ViewVaccinePageModule)
  },
  {
    path: 'update-vaccine/:id',
    loadChildren: () => import('./update-vaccine/update-vaccine.module').then( m => m.UpdateVaccinePageModule)
  },
  {
    path: 'add-grab',
    loadChildren: () => import('./add-grab/add-grab.module').then( m => m.AddGrabPageModule)
  },
  {
    path: 'view-grab/:id',
    loadChildren: () => import('./view-grab/view-grab.module').then( m => m.ViewGrabPageModule)
  },
  {
    path: 'update-grab/:id',
    loadChildren: () => import('./update-grab/update-grab.module').then( m => m.UpdateGrabPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./add-product/add-product.module').then( m => m.AddProductPageModule)
  },
  {
    path: 'view-product/:id',
    loadChildren: () => import('./view-product/view-product.module').then( m => m.ViewProductPageModule)
  },
  {
    path: 'update-product/:id',
    loadChildren: () => import('./update-product/update-product.module').then( m => m.UpdateProductPageModule)
  },
  {
    path: 'menuproduct-admin',
    loadChildren: () => import('./menuproduct-admin/menuproduct-admin.module').then( m => m.MenuproductAdminPageModule)
  },
  {
    path: 'bookingspa',
    loadChildren: () => import('./bookingspa/bookingspa.module').then( m => m.BookingspaPageModule)
  },
  {
    path: 'bookingvacc',
    loadChildren: () => import('./bookingvacc/bookingvacc.module').then( m => m.BookingvaccPageModule)
  },
  {
    path: 'bookinggrab',
    loadChildren: () => import('./bookinggrab/bookinggrab.module').then( m => m.BookinggrabPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
