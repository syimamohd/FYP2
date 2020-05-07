(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-contact-add-contact-module~add-content-add-content-module~add-grab-add-grab-module~add-h~a513e83c"],{

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let FirebaseService = class FirebaseService {
    constructor(afs) {
        this.afs = afs;
        //define collection
        this.noteCollection = this.afs.collection('notes');
        this.catHotelCollection = this.afs.collection('catHotel');
        this.catSpaCollection = this.afs.collection('catSpa');
        this.catVaccineCollection = this.afs.collection('catVaccine');
        this.catGrabCollection = this.afs.collection('catGrab');
        this.catProductCollection = this.afs.collection('catProduct');
        this.catHotelBookingCollection = this.afs.collection('hotelBooking');
        this.catSpaBookingCollection = this.afs.collection('spaBooking');
        this.catVaccBookingCollection = this.afs.collection('vaccBooking');
        this.catGrabBookingCollection = this.afs.collection('grabBooking');
        this.purchasedItemCollection = this.afs.collection('purchasedItem');
        this.contentCollection = this.afs.collection('contentItem');
        //content data collection
        this.contentItem = this.contentCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        //get collection data
        this.purchasedItem = this.purchasedItemCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        //get collection data
        this.notes = this.noteCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        //get cat hotel collection data
        this.catHotel = this.catHotelCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        //get cat spa collection data
        this.catSpa = this.catSpaCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        //get cat vaccine collection data
        this.catVaccine = this.catVaccineCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        //get cat grab collection data
        this.catGrab = this.catGrabCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        //get cat product collection data
        this.catProduct = this.catProductCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        //get cat hotel booking collection data
        this.hotelBooking = this.catHotelBookingCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        //get cat spa booking collection data
        this.spaBooking = this.catSpaBookingCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        //get cat vacc n neuter booking collection data
        this.vaccBooking = this.catVaccBookingCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        //get cat grab booking collection data
        this.grabBooking = this.catGrabBookingCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    //--------------------------------------NOTE TUTORIAL--------------------------------------------------
    //getting all notes
    getNotes() {
        return this.notes;
    }
    //getting single note
    getNote(id) {
        return this.noteCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(note => {
            note.id = id;
            return note;
        }));
    }
    //create new note
    addNote(note) {
        return this.noteCollection.add(note);
    }
    //update note
    updateNote(note) {
        return this.noteCollection.doc(note.id).update({ title: note.title, content: note.content });
    }
    //delete note
    deleteNote(id) {
        return this.noteCollection.doc(id).delete();
    }
    //--------------------------------------CAT HOTEL--------------------------------------------------
    //getting all catHotel
    getHotels() {
        return this.catHotel;
    }
    //getting single cat hotel
    getHotel(id) {
        return this.catHotelCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(hotel => {
            hotel.id = id;
            return hotel;
        }));
    }
    //create new hotel
    addHotel(hotel) {
        return this.catHotelCollection.add(hotel);
    }
    //update hotel details
    updateHotel(hotel) {
        return this.catHotelCollection.doc(hotel.id).update({ hotelName: hotel.hotelName, hotelDetails: hotel.hotelDetails, hotelPrice: hotel.hotelPrice });
    }
    //delete hotel
    deleteHotel(id) {
        return this.catHotelCollection.doc(id).delete();
    }
    //--------------------------------------CAT SPA & GROOMING-----------------------------------------------
    //getting all catSpa
    getSpas() {
        return this.catSpa;
    }
    //getting single cat spa
    getSpa(id) {
        return this.catSpaCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(spa => {
            spa.id = id;
            return spa;
        }));
    }
    //create new spa
    addSpa(spa) {
        return this.catSpaCollection.add(spa);
    }
    //update spa details
    updateSpa(spa) {
        return this.catSpaCollection.doc(spa.id).update({ spaName: spa.spaName, spaDetails: spa.spaDetails, spaPrice: spa.spaPrice });
    }
    //delete spa
    deleteSpa(id) {
        return this.catSpaCollection.doc(id).delete();
    }
    //--------------------------------------CAT VACCINE & NEUTER-----------------------------------------------
    //getting all catVaccine
    getVaccines() {
        return this.catVaccine;
    }
    //getting single cat vaccine
    getVaccine(id) {
        return this.catVaccineCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(vaccine => {
            vaccine.id = id;
            return vaccine;
        }));
    }
    //create new vaccine
    addVaccine(vaccine) {
        return this.catVaccineCollection.add(vaccine);
    }
    //update vaccine details
    updateVaccine(vaccine) {
        return this.catVaccineCollection.doc(vaccine.id).update({ vaccineName: vaccine.vaccineName, vaccineDetails: vaccine.vaccineDetails, vaccinePrice: vaccine.vaccinePrice });
    }
    //delete vaccine
    deleteVaccine(id) {
        return this.catVaccineCollection.doc(id).delete();
    }
    //-----------------------------------------CAT GRAB-----------------------------------------------
    //getting all catGrab
    getGrabs() {
        return this.catGrab;
    }
    //getting single cat grab
    getGrab(id) {
        return this.catGrabCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(grab => {
            grab.id = id;
            return grab;
        }));
    }
    //create new grab
    addGrab(grab) {
        return this.catGrabCollection.add(grab);
    }
    //update grab details
    updateGrab(grab) {
        return this.catGrabCollection.doc(grab.id).update({ grabName: grab.grabName, grabDetails: grab.grabDetails, grabPrice: grab.grabPrice });
    }
    //delete grab
    deleteGrab(id) {
        return this.catGrabCollection.doc(id).delete();
    }
    //-----------------------------------------CAT PRODUCT-----------------------------------------------
    //getting all cat product
    getProducts() {
        return this.catProduct;
    }
    //getting single cat product
    getProduct(id) {
        return this.catProductCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(product => {
            product.id = id;
            return product;
        }));
    }
    //create new product
    addProduct(product) {
        return this.catProductCollection.add(product);
    }
    //update product details
    updateProduct(product) {
        return this.catProductCollection.doc(product.id).update({ productName: product.productName, productDetails: product.productDetails, productPrice: product.productPrice });
    }
    //delete product
    deleteProduct(id) {
        return this.catProductCollection.doc(id).delete();
    }
    //--------------------------------------CAT HOTEL BOOKING------------------------------------------------
    //getting all catHotel booking
    getHotelBookings() {
        return this.hotelBooking;
    }
    //getting single cat hotel booking
    getHotelBooking(id) {
        return this.catHotelBookingCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(bookinghotel => {
            bookinghotel.id = id;
            return bookinghotel;
        }));
    }
    //create new hotel booking
    submitBookingHotel(bookinghotel) {
        return this.catHotelBookingCollection.add(bookinghotel);
    }
    //update hotel details
    updateBookingHotel(bookinghotel) {
        return this.catHotelBookingCollection.doc(bookinghotel.id).update({
            customerName: bookinghotel.customerName, contactNumber: bookinghotel.contactNumber,
            catName: bookinghotel.catName, remark: bookinghotel.remark, checkInDate: bookinghotel.checkInDate,
            checkOutDate: bookinghotel.checkOutDate, timeIn: bookinghotel.timeIn,
            timeOut: bookinghotel.timeOut
        });
    }
    //delete hotel
    deleteBookingHotel(id) {
        return this.catHotelBookingCollection.doc(id).delete();
    }
    //--------------------------------------CAT SPA & GROOMING BOOKING-----------------------------------------------
    //getting all catSpa booking
    getSpaBookings() {
        return this.spaBooking;
    }
    //getting single cat spa booking
    getSpaBooking(id) {
        return this.catSpaBookingCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(bookingspa => {
            bookingspa.id = id;
            return bookingspa;
        }));
    }
    //create new spa booking
    submitBookingSpa(bookingspa) {
        return this.catSpaBookingCollection.add(bookingspa);
    }
    //update spa details
    updateBookingSpa(bookingspa) {
        return this.catSpaBookingCollection.doc(bookingspa.id).update({ customerName: bookingspa.customerName, contactNumber: bookingspa.contactNumber,
            catName: bookingspa.catName, remark: bookingspa.remark, date: bookingspa.date,
            time: bookingspa.time
        });
    }
    //delete spa
    deleteBookingSpa(id) {
        return this.catSpaBookingCollection.doc(id).delete();
    }
    //--------------------------------------CAT VACCINE & NEUTER BOOKING---------------------------------------------
    //getting all catVaccine
    getVaccBookings() {
        return this.vaccBooking;
    }
    //getting single cat vaccine
    getVaccBooking(id) {
        return this.catVaccBookingCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(vaccine => {
            vaccine.id = id;
            return vaccine;
        }));
    }
    //create new vaccine
    submitBookingVacc(bookingvacc) {
        return this.catVaccBookingCollection.add(bookingvacc);
    }
    //update vaccine details
    updateBookingVacc(bookingvacc) {
        return this.catVaccBookingCollection.doc(bookingvacc.id).update({ customerName: bookingvacc.customerName, contactNumber: bookingvacc.contactNumber,
            catName: bookingvacc.catName, remark: bookingvacc.remark, date: bookingvacc.date,
            time: bookingvacc.time });
    }
    //delete vaccine
    deleteBookingVacc(id) {
        return this.catVaccBookingCollection.doc(id).delete();
    }
    //-----------------------------------------CAT GRAB BOOKING-----------------------------------------------
    //getting all catGrab
    getGrabBookings() {
        return this.grabBooking;
    }
    //getting single cat grab
    getGrabBooking(id) {
        return this.catGrabBookingCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(grab => {
            grab.id = id;
            return grab;
        }));
    }
    //create new grab
    submitBookingGrab(bookinggrab) {
        return this.catGrabBookingCollection.add(bookinggrab);
    }
    //update grab details
    updateBookingGrab(bookinggrab) {
        return this.catGrabBookingCollection.doc(bookinggrab.id).update({ customerName: bookinggrab.customerName, contactNumber: bookinggrab.contactNumber,
            catName: bookinggrab.catName, remark: bookinggrab.remark, date: bookinggrab.date,
            time: bookinggrab.time });
    }
    //delete grab
    deleteBookingGrab(id) {
        return this.catGrabBookingCollection.doc(id).delete();
    }
    //-----------------------------------------PURCHASED ITEM-----------------------------------------------
    //getting all item
    getPurchasedItems() {
        return this.purchasedItem;
    }
    //getting single item
    getPurchasedItem(id) {
        return this.purchasedItemCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(item => {
            item.id = id;
            return item;
        }));
    }
    //create new item
    submitPurchasedItem(item) {
        return this.purchasedItemCollection.add(item);
    }
    // //update grab details
    // updateBookingGrab(bookinggrab: BookingGrab): Promise<void> 
    // {
    //   return this.catGrabBookingCollection.doc(bookinggrab.id).update(
    //   { customerName: bookinggrab.customerName, contactNumber: bookinggrab.contactNumber,
    //     catName: bookinggrab.catName, remark:bookinggrab.remark, date:bookinggrab.date,
    //     time: bookinggrab.time });
    // }
    // //delete grab
    // deleteBookingGrab(id: string): Promise<void> 
    // {
    //   return this.catGrabBookingCollection.doc(id).delete();
    // }
    //-----------------------------------------DASHBOARD CONTENT-----------------------------------------------
    //getting all item
    getContents() {
        return this.contentItem;
    }
    //getting single item
    getContent(id) {
        return this.contentCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(content => {
            content.id = id;
            return content;
        }));
    }
    //create new item
    addContent(content) {
        return this.contentCollection.add(content);
    }
    //update content details
    updateContent(content) {
        return this.contentCollection.doc(content.id).update({ title: content.title, contentDetails: content.contentDetails, contacttitle: content.contacttitle, contactDetails: content.contactDetails });
    }
    //delete hotel
    deleteContent(id) {
        return this.contentCollection.doc(id).delete();
    }
};
FirebaseService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], FirebaseService);



/***/ })

}]);
//# sourceMappingURL=default~add-contact-add-contact-module~add-content-add-content-module~add-grab-add-grab-module~add-h~a513e83c-es2015.js.map