import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home',
   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'register', loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)},
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)},
  { path: 'bookinghotel/:id', loadChildren: () => import('./bookinghotel/bookinghotel.module').then( m => m.BookinghotelPageModule)},
  { path: 'menuhotel', loadChildren: () => import('./menuhotel/menuhotel.module').then( m => m.MenuhotelPageModule)},
  { path: 'menuspa', loadChildren: () => import('./menuspa/menuspa.module').then( m => m.MenuspaPageModule)},
  { path: 'menugrab', loadChildren: () => import('./menugrab/menugrab.module').then( m => m.MenugrabPageModule)},
  { path: 'menuvaccine', loadChildren: () => import('./menuvaccine/menuvaccine.module').then( m => m.MenuvaccinePageModule)},
  { path: 'services',loadChildren: () => import('./services/firebase.service')},
  { path: 'model',loadChildren: () => import('./model/Note')},
  { path: 'model',loadChildren: () => import('./model/CatHotel')},
  { path: 'model',loadChildren: () => import('./model/CatSpa')},
  { path: 'model',loadChildren: () => import('./model/CatVaccine')},
  { path: 'model',  loadChildren: () => import('./model/CatGrab')},
  { path: 'model', loadChildren: () => import('./model/CatProduct')},
  { path: 'model',  loadChildren: () => import('./model/CatVaccine')},
  { path: 'model',  loadChildren: () => import('./model/BookingHotel')},
  { path: 'model',  loadChildren: () => import('./model/BookingSpa')},
  { path: 'model',loadChildren: () => import('./model/BookingVacc')},
  { path: 'model',loadChildren: () => import('./model/PurchasedItem')},
  { path: 'model',loadChildren: () => import('./model/Content')},
  { path: 'add-note',loadChildren: () => import('./add-note/add-note.module').then( m => m.AddNotePageModule)},
  { path: 'view-note/:id', loadChildren: () => import('./view-note/view-note.module').then( m => m.ViewNotePageModule)},
  { path: 'update-note/:id',loadChildren: () => import('./update-note/update-note.module').then( m => m.UpdateNotePageModule)},
  { path: 'add-hotel',loadChildren: () => import('./add-hotel/add-hotel.module').then( m => m.AddHotelPageModule)},
  { path: 'view-hotel/:id', loadChildren: () => import('./view-hotel/view-hotel.module').then( m => m.ViewHotelPageModule)},
  { path: 'update-hotel/:id', loadChildren: () => import('./update-hotel/update-hotel.module').then( m => m.UpdateHotelPageModule)},
  { path: 'add-spa', loadChildren: () => import('./add-spa/add-spa.module').then( m => m.AddSpaPageModule)},
  { path: 'view-spa/:id', loadChildren: () => import('./view-spa/view-spa.module').then( m => m.ViewSpaPageModule)},
  { path: 'update-spa/:id',loadChildren: () => import('./update-spa/update-spa.module').then( m => m.UpdateSpaPageModule)},
  { path: 'add-vaccine',loadChildren: () => import('./add-vaccine/add-vaccine.module').then( m => m.AddVaccinePageModule)},
  { path: 'view-vaccine/:id', loadChildren: () => import('./view-vaccine/view-vaccine.module').then( m => m.ViewVaccinePageModule)},
  { path: 'update-vaccine/:id', loadChildren: () => import('./update-vaccine/update-vaccine.module').then( m => m.UpdateVaccinePageModule)},
  { path: 'add-grab', loadChildren: () => import('./add-grab/add-grab.module').then( m => m.AddGrabPageModule)},
  { path: 'view-grab/:id', loadChildren: () => import('./view-grab/view-grab.module').then( m => m.ViewGrabPageModule)},
  { path: 'update-grab/:id', loadChildren: () => import('./update-grab/update-grab.module').then( m => m.UpdateGrabPageModule)},
  { path: 'add-product',  loadChildren: () => import('./add-product/add-product.module').then( m => m.AddProductPageModule)},
  { path: 'view-product/:id',loadChildren: () => import('./view-product/view-product.module').then( m => m.ViewProductPageModule)},
  { path: 'update-product/:id', loadChildren: () => import('./update-product/update-product.module').then( m => m.UpdateProductPageModule)},
  { path: 'bookingspa/:id',  loadChildren: () => import('./bookingspa/bookingspa.module').then( m => m.BookingspaPageModule)},
  { path: 'bookingvacc/:id',  loadChildren: () => import('./bookingvacc/bookingvacc.module').then( m => m.BookingvaccPageModule)},
  { path: 'bookinggrab/:id', loadChildren: () => import('./bookinggrab/bookinggrab.module').then( m => m.BookinggrabPageModule)},
  { path: 'edit-profile', loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)},
  { path: 'view-profile',  loadChildren: () => import('./view-profile/view-profile.module').then( m => m.ViewProfilePageModule)},
  { path: 'view-booking-hotel/:id', loadChildren: () => import('./view-booking-hotel/view-booking-hotel.module').then( m => m.ViewBookingHotelPageModule)},
  { path: 'view-booking-spa/:id', loadChildren: () => import('./view-booking-spa/view-booking-spa.module').then( m => m.ViewBookingSpaPageModule)},
  { path: 'view-booking-grab/:id', loadChildren: () => import('./view-booking-grab/view-booking-grab.module').then( m => m.ViewBookingGrabPageModule)},
  { path: 'view-booking-vaccine/:id', loadChildren: () => import('./view-booking-vaccine/view-booking-vaccine.module').then( m => m.ViewBookingVaccinePageModule)},
  { path: 'update-booking-hotel/:id', loadChildren: () => import('./update-booking-hotel/update-booking-hotel.module').then( m => m.UpdateBookingHotelPageModule)},
  { path: 'update-booking-spa/:id', loadChildren: () => import('./update-booking-spa/update-booking-spa.module').then( m => m.UpdateBookingSpaPageModule)},
  { path: 'update-booking-grab/:id', loadChildren: () => import('./update-booking-grab/update-booking-grab.module').then( m => m.UpdateBookingGrabPageModule)},
  { path: 'update-booking-vacc/:id', loadChildren: () => import('./update-booking-vacc/update-booking-vacc.module').then( m => m.UpdateBookingVaccPageModule)},
  { path: 'menuproduct', loadChildren: () => import('./menuproduct/menuproduct.module').then( m => m.MenuproductPageModule)},
  { path: 'checkout/:id', loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)},
  { path: 'cart-modal/:id', loadChildren: () => import('./cart-modal/cart-modal.module').then( m => m.CartModalPageModule)},
  { path: 'add-content', loadChildren: () => import('./add-content/add-content.module').then( m => m.AddContentPageModule)},
  { path: 'view-content/:id', loadChildren: () => import('./view-content/view-content.module').then( m => m.ViewContentPageModule)},
  { path: 'update-content/:id', loadChildren: () => import('./update-content/update-content.module').then( m => m.UpdateContentPageModule)},
  {
    path: 'paymentsuccess',
    loadChildren: () => import('./paymentsuccess/paymentsuccess.module').then( m => m.PaymentsuccessPageModule)
  },
  {
    path: 'banklist',
    loadChildren: () => import('./banklist/banklist.module').then( m => m.BanklistPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }