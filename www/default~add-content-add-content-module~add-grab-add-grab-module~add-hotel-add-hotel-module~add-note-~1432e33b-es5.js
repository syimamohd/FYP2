function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b"], {
  /***/
  "./src/app/services/firebase.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/firebase.service.ts ***!
    \**********************************************/

  /*! exports provided: FirebaseService */

  /***/
  function srcAppServicesFirebaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
      return FirebaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FirebaseService = /*#__PURE__*/function () {
      function FirebaseService(afs) {
        _classCallCheck(this, FirebaseService);

        this.afs = afs;
        this.usersCollection = this.afs.collection('/users'); //define collection

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
        this.contentCollection = this.afs.collection('contentItem'); //content data collection

        this.contentItem = this.contentCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object.assign({
              id: id
            }, data);
          });
        })); //get collection data

        this.purchasedItem = this.purchasedItemCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object.assign({
              id: id
            }, data);
          });
        })); //get collection data

        this.notes = this.noteCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object.assign({
              id: id
            }, data);
          });
        })); //get cat hotel collection data

        this.catHotel = this.catHotelCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object.assign({
              id: id
            }, data);
          });
        })); //get cat spa collection data

        this.catSpa = this.catSpaCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object.assign({
              id: id
            }, data);
          });
        })); //get cat vaccine collection data

        this.catVaccine = this.catVaccineCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object.assign({
              id: id
            }, data);
          });
        })); //get cat grab collection data

        this.catGrab = this.catGrabCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object.assign({
              id: id
            }, data);
          });
        })); //get cat product collection data

        this.catProduct = this.catProductCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object.assign({
              id: id
            }, data);
          });
        })); //get cat hotel booking collection data

        this.hotelBooking = this.catHotelBookingCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object.assign({
              id: id
            }, data);
          });
        })); //get cat spa booking collection data

        this.spaBooking = this.catSpaBookingCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object.assign({
              id: id
            }, data);
          });
        })); //get cat vacc n neuter booking collection data

        this.vaccBooking = this.catVaccBookingCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object.assign({
              id: id
            }, data);
          });
        })); //get cat grab booking collection data

        this.grabBooking = this.catGrabBookingCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
          return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object.assign({
              id: id
            }, data);
          });
        }));
      } //--------------------------------------NOTE TUTORIAL--------------------------------------------------
      //getting all notes


      _createClass(FirebaseService, [{
        key: "getNotes",
        value: function getNotes() {
          return this.notes;
        } //getting single note

      }, {
        key: "getNote",
        value: function getNote(id) {
          return this.noteCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (note) {
            note.id = id;
            return note;
          }));
        } //create new note

      }, {
        key: "addNote",
        value: function addNote(note) {
          return this.noteCollection.add(note);
        } //update note

      }, {
        key: "updateNote",
        value: function updateNote(note) {
          return this.noteCollection.doc(note.id).update({
            title: note.title,
            content: note.content
          });
        } //delete note

      }, {
        key: "deleteNote",
        value: function deleteNote(id) {
          return this.noteCollection.doc(id)["delete"]();
        } //--------------------------------------CAT HOTEL--------------------------------------------------
        //getting all catHotel

      }, {
        key: "getHotels",
        value: function getHotels() {
          return this.catHotel;
        } //getting single cat hotel

      }, {
        key: "getHotel",
        value: function getHotel(id) {
          return this.catHotelCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (hotel) {
            hotel.id = id;
            return hotel;
          }));
        } //create new hotel

      }, {
        key: "addHotel",
        value: function addHotel(hotel) {
          return this.catHotelCollection.add(hotel);
        } //update hotel details

      }, {
        key: "updateHotel",
        value: function updateHotel(hotel) {
          return this.catHotelCollection.doc(hotel.id).update(hotel);
        } //delete hotel

      }, {
        key: "deleteHotel",
        value: function deleteHotel(id) {
          return this.catHotelCollection.doc(id)["delete"]();
        } //--------------------------------------CAT SPA & GROOMING-----------------------------------------------
        //getting all catSpa

      }, {
        key: "getSpas",
        value: function getSpas() {
          return this.catSpa;
        } //getting single cat spa

      }, {
        key: "getSpa",
        value: function getSpa(id) {
          return this.catSpaCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (spa) {
            spa.id = id;
            return spa;
          }));
        } //create new spa

      }, {
        key: "addSpa",
        value: function addSpa(spa) {
          return this.catSpaCollection.add(spa);
        } //update spa details

      }, {
        key: "updateSpa",
        value: function updateSpa(spa) {
          return this.catSpaCollection.doc(spa.id).update(spa);
        } //delete spa

      }, {
        key: "deleteSpa",
        value: function deleteSpa(id) {
          return this.catSpaCollection.doc(id)["delete"]();
        } //--------------------------------------CAT VACCINE & NEUTER-----------------------------------------------
        //getting all catVaccine

      }, {
        key: "getVaccines",
        value: function getVaccines() {
          return this.catVaccine;
        } //getting single cat vaccine

      }, {
        key: "getVaccine",
        value: function getVaccine(id) {
          return this.catVaccineCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (vaccine) {
            vaccine.id = id;
            return vaccine;
          }));
        } //create new vaccine

      }, {
        key: "addVaccine",
        value: function addVaccine(vaccine) {
          return this.catVaccineCollection.add(vaccine);
        } //update vaccine details

      }, {
        key: "updateVaccine",
        value: function updateVaccine(vaccine) {
          return this.catVaccineCollection.doc(vaccine.id).update(vaccine);
        } //delete vaccine

      }, {
        key: "deleteVaccine",
        value: function deleteVaccine(id) {
          return this.catVaccineCollection.doc(id)["delete"]();
        } //-----------------------------------------CAT GRAB-----------------------------------------------
        //getting all catGrab

      }, {
        key: "getGrabs",
        value: function getGrabs() {
          return this.catGrab;
        } //getting single cat grab

      }, {
        key: "getGrab",
        value: function getGrab(id) {
          return this.catGrabCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (grab) {
            grab.id = id;
            return grab;
          }));
        } //create new grab

      }, {
        key: "addGrab",
        value: function addGrab(grab) {
          return this.catGrabCollection.add(grab);
        } //update grab details

      }, {
        key: "updateGrab",
        value: function updateGrab(grab) {
          return this.catGrabCollection.doc(grab.id).update(grab);
        } //delete grab

      }, {
        key: "deleteGrab",
        value: function deleteGrab(id) {
          return this.catGrabCollection.doc(id)["delete"]();
        } //-----------------------------------------CAT PRODUCT-----------------------------------------------
        //getting all cat product

      }, {
        key: "getProducts",
        value: function getProducts() {
          return this.catProduct;
        } //getting single cat product

      }, {
        key: "getProduct",
        value: function getProduct(id) {
          return this.catProductCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (product) {
            product.id = id;
            return product;
          }));
        } //create new product

      }, {
        key: "addProduct",
        value: function addProduct(product) {
          return this.catProductCollection.add(product);
        } //update product details

      }, {
        key: "updateProduct",
        value: function updateProduct(product) {
          return this.catProductCollection.doc(product.id).update(product);
        } //delete product

      }, {
        key: "deleteProduct",
        value: function deleteProduct(id) {
          return this.catProductCollection.doc(id)["delete"]();
        } //--------------------------------------CAT HOTEL BOOKING-----------------------------------------------
        //getting all catHotel booking

      }, {
        key: "getHotelBookings",
        value: function getHotelBookings() {
          return this.hotelBooking;
        } //getting single cat hotel booking

      }, {
        key: "getHotelBooking",
        value: function getHotelBooking(id) {
          return this.catHotelBookingCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (bookinghotel) {
            bookinghotel.id = id;
            return bookinghotel;
          }));
        } //create new hotel booking

      }, {
        key: "submitBookingHotel",
        value: function submitBookingHotel(bookinghotel) {
          return this.catHotelBookingCollection.add(bookinghotel);
        } // submitBookingHotel(something: { book: {}; uid: string }) 
        // {
        //   this.usersCollection.doc(something.uid).update({ booking: something.book, catnem : something.book });
        //   console.log({ something });
        // }
        //update hotel details

      }, {
        key: "updateBookingHotel",
        value: function updateBookingHotel(bookinghotel) {
          return this.catHotelBookingCollection.doc(bookinghotel.id).update(bookinghotel);
        } //delete hotel

      }, {
        key: "deleteBookingHotel",
        value: function deleteBookingHotel(id) {
          return this.catHotelBookingCollection.doc(id)["delete"]();
        } //--------------------------------------CAT SPA & GROOMING BOOKING-----------------------------------------------
        //getting all catSpa booking

      }, {
        key: "getSpaBookings",
        value: function getSpaBookings() {
          return this.spaBooking;
        } //getting single cat spa booking

      }, {
        key: "getSpaBooking",
        value: function getSpaBooking(id) {
          return this.catSpaBookingCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (bookingspa) {
            bookingspa.id = id;
            return bookingspa;
          }));
        } //create new spa booking

      }, {
        key: "submitBookingSpa",
        value: function submitBookingSpa(bookingspa) {
          return this.catSpaBookingCollection.add(bookingspa);
        } //update spa details

      }, {
        key: "updateBookingSpa",
        value: function updateBookingSpa(bookingspa) {
          return this.catSpaBookingCollection.doc(bookingspa.id).update(bookingspa);
        } //delete spa

      }, {
        key: "deleteBookingSpa",
        value: function deleteBookingSpa(id) {
          return this.catSpaBookingCollection.doc(id)["delete"]();
        } //--------------------------------------CAT VACCINE & NEUTER BOOKING---------------------------------------------
        //getting all catVaccine

      }, {
        key: "getVaccBookings",
        value: function getVaccBookings() {
          return this.vaccBooking;
        } //getting single cat vaccine

      }, {
        key: "getVaccBooking",
        value: function getVaccBooking(id) {
          return this.catVaccBookingCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (vaccine) {
            vaccine.id = id;
            return vaccine;
          }));
        } //create new vaccine

      }, {
        key: "submitBookingVacc",
        value: function submitBookingVacc(bookingvacc) {
          return this.catVaccBookingCollection.add(bookingvacc);
        } //update vaccine details

      }, {
        key: "updateBookingVacc",
        value: function updateBookingVacc(bookingvacc) {
          return this.catVaccBookingCollection.doc(bookingvacc.id).update(bookingvacc);
        } //delete vaccine

      }, {
        key: "deleteBookingVacc",
        value: function deleteBookingVacc(id) {
          return this.catVaccBookingCollection.doc(id)["delete"]();
        } //-----------------------------------------CAT GRAB BOOKING-----------------------------------------------
        //getting all catGrab

      }, {
        key: "getGrabBookings",
        value: function getGrabBookings() {
          return this.grabBooking;
        } //getting single cat grab

      }, {
        key: "getGrabBooking",
        value: function getGrabBooking(id) {
          return this.catGrabBookingCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (grab) {
            grab.id = id;
            return grab;
          }));
        } //create new grab

      }, {
        key: "submitBookingGrab",
        value: function submitBookingGrab(bookinggrab) {
          return this.catGrabBookingCollection.add(bookinggrab);
        } //update grab details

      }, {
        key: "updateBookingGrab",
        value: function updateBookingGrab(bookinggrab) {
          return this.catGrabBookingCollection.doc(bookinggrab.id).update(bookinggrab);
        } //delete grab

      }, {
        key: "deleteBookingGrab",
        value: function deleteBookingGrab(id) {
          return this.catGrabBookingCollection.doc(id)["delete"]();
        } //-----------------------------------------PURCHASED ITEM-----------------------------------------------
        //getting all item

      }, {
        key: "getPurchasedItems",
        value: function getPurchasedItems() {
          return this.purchasedItem;
        } //getting single item

      }, {
        key: "getPurchasedItem",
        value: function getPurchasedItem(id) {
          return this.purchasedItemCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (item) {
            item.id = id;
            return item;
          }));
        } //create new item

      }, {
        key: "submitPurchasedItem",
        value: function submitPurchasedItem(item) {
          return this.purchasedItemCollection.add(item);
        } // //update grab details
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

      }, {
        key: "getContents",
        value: function getContents() {
          return this.contentItem;
        } //getting single item

      }, {
        key: "getContent",
        value: function getContent(id) {
          return this.contentCollection.doc(id).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (content) {
            content.id = id;
            return content;
          }));
        } //create new item

      }, {
        key: "addContent",
        value: function addContent(content) {
          return this.contentCollection.add(content);
        } //update content details

      }, {
        key: "updateContent",
        value: function updateContent(content) {
          return this.contentCollection.doc(content.id).update(content);
        } //delete hotel

      }, {
        key: "deleteContent",
        value: function deleteContent(id) {
          return this.contentCollection.doc(id)["delete"]();
        }
      }]);

      return FirebaseService;
    }();

    FirebaseService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], FirebaseService);
    /***/
  }
}]);
//# sourceMappingURL=default~add-content-add-content-module~add-grab-add-grab-module~add-hotel-add-hotel-module~add-note-~1432e33b-es5.js.map