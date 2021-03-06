import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Note} from '../model/Note';
import {CatHotel} from '../model/CatHotel';
import {CatSpa} from '../model/CatSpa';
import {CatVaccine} from '../model/CatVaccine';
import {CatGrab} from '../model/CatGrab';
import {CatProduct} from '../model/CatProduct';
import {BookingHotel} from '../model/BookingHotel';
import {BookingSpa} from '../model/BookingSpa';
import {BookingVacc} from '../model/BookingVacc';
import {BookingGrab} from '../model/BookingGrab';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';
import { PurchasedItem } from '../model/PurchasedItem';
import { Content } from '../model/Content';

@Injectable({ providedIn: 'root'})

export class FirebaseService 
{
  private usersCollection: any;
  //hotel & services & product info in db
  private notes: Observable<Note[]>;
  private catHotel: Observable<CatHotel[]>;
  private catSpa: Observable<CatSpa[]>;
  private catVaccine: Observable<CatVaccine[]>;
  private catGrab: Observable<CatGrab[]>;
  private catProduct: Observable<CatProduct[]>;

  //booking hotel & services table in db
  private hotelBooking: Observable<BookingHotel[]>;
  private spaBooking: Observable<BookingSpa[]>;
  private vaccBooking: Observable<BookingVacc[]>;
  private grabBooking: Observable<BookingGrab[]>;
  private purchasedItem: Observable<PurchasedItem[]>;
  private contentItem: Observable<Content[]>;

  private noteCollection: AngularFirestoreCollection<Note>;
  private catHotelCollection: AngularFirestoreCollection<CatHotel>;
  private catSpaCollection: AngularFirestoreCollection<CatSpa>;
  private catVaccineCollection: AngularFirestoreCollection<CatVaccine>;
  private catGrabCollection: AngularFirestoreCollection<CatGrab>;
  private catProductCollection: AngularFirestoreCollection<CatProduct>;

  private catHotelBookingCollection: AngularFirestoreCollection<BookingHotel>;
  private catSpaBookingCollection: AngularFirestoreCollection<BookingSpa>;
  private catVaccBookingCollection: AngularFirestoreCollection<BookingVacc>;
  private catGrabBookingCollection: AngularFirestoreCollection<BookingGrab>;
  private purchasedItemCollection: AngularFirestoreCollection<PurchasedItem>;
  private contentCollection: AngularFirestoreCollection<Content>;

  constructor(private afs: AngularFirestore) 
  {
    this.usersCollection = this.afs.collection<any>('/users');
    //define collection
    this.noteCollection = this.afs.collection<Note>('notes');
    this.catHotelCollection = this.afs.collection<CatHotel>('catHotel');
    this.catSpaCollection = this.afs.collection<CatSpa>('catSpa');
    this.catVaccineCollection = this.afs.collection<CatVaccine>('catVaccine');
    this.catGrabCollection = this.afs.collection<CatGrab>('catGrab');
    this.catProductCollection = this.afs.collection<CatProduct>('catProduct');

    this.catHotelBookingCollection = this.afs.collection<BookingHotel>('hotelBooking');
    this.catSpaBookingCollection = this.afs.collection<BookingSpa>('spaBooking');
    this.catVaccBookingCollection = this.afs.collection<BookingVacc>('vaccBooking');
    this.catGrabBookingCollection = this.afs.collection<BookingGrab>('grabBooking');
    this.purchasedItemCollection = this.afs.collection<PurchasedItem>('purchasedItem');
    this.contentCollection = this.afs.collection<Content>('contentItem');

    //content data collection
    this.contentItem = this.contentCollection.snapshotChanges().pipe(
      map(actions => 
        {
        return actions.map(a => 
          {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
          });
        })
        );

    //get collection data
    this.purchasedItem = this.purchasedItemCollection.snapshotChanges().pipe(
      map(actions => 
        {
        return actions.map(a => 
          {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
          });
        })
        );

    //get collection data
    this.notes = this.noteCollection.snapshotChanges().pipe(
        map(actions => 
          {
          return actions.map(a => 
            {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
            });
          })
    );

    //get cat hotel collection data
    this.catHotel = this.catHotelCollection.snapshotChanges().pipe(
      map(actions => 
        {
        return actions.map(a => 
          {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
          });
        })
    );

    //get cat spa collection data
    this.catSpa = this.catSpaCollection.snapshotChanges().pipe(
      map(actions => 
        {
        return actions.map(a => 
          {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
          });
        })
    );

    //get cat vaccine collection data
    this.catVaccine = this.catVaccineCollection.snapshotChanges().pipe(
      map(actions => 
        {
        return actions.map(a => 
          {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
          });
        })
    );

    //get cat grab collection data
    this.catGrab = this.catGrabCollection.snapshotChanges().pipe(
      map(actions => 
        {
        return actions.map(a => 
          {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
          });
        })
    );

    //get cat product collection data
    this.catProduct = this.catProductCollection.snapshotChanges().pipe(
      map(actions => 
        {
        return actions.map(a => 
          {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
          });
        })
    );

    //get cat hotel booking collection data
    this.hotelBooking = this.catHotelBookingCollection.snapshotChanges().pipe(
      map(actions => 
        {
        return actions.map(a => 
          {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
          });
        })
    );

    //get cat spa booking collection data
    this.spaBooking = this.catSpaBookingCollection.snapshotChanges().pipe(
      map(actions => 
        {
        return actions.map(a => 
          {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
          });
        })
    );

    
    //get cat vacc n neuter booking collection data
    this.vaccBooking = this.catVaccBookingCollection.snapshotChanges().pipe(
      map(actions => 
        {
        return actions.map(a => 
          {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
          });
        })
    );

     
    //get cat grab booking collection data
    this.grabBooking = this.catGrabBookingCollection.snapshotChanges().pipe(
      map(actions => 
        {
        return actions.map(a => 
          {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
          });
        })
    );
  }

  //--------------------------------------NOTE TUTORIAL--------------------------------------------------
  //getting all notes
  getNotes(): Observable<Note[]> 
  {
    return this.notes;
  }

  //getting single note
  getNote(id: string): Observable<Note> 
  {
    return this.noteCollection.doc<Note>(id).valueChanges().pipe(
        take(1),
        map(note => {
          note.id = id;
          return note;
        })
    );
  }

  //create new note
  addNote(note: Note): Promise<DocumentReference> 
  {
    return this.noteCollection.add(note);
  }

  //update note
  updateNote(note: Note): Promise<void> 
  {
    return this.noteCollection.doc(note.id).update({ title: note.title, content: note.content });
  }

  //delete note
  deleteNote(id: string): Promise<void> 
  {
    return this.noteCollection.doc(id).delete();
  }

  //--------------------------------------CAT HOTEL--------------------------------------------------
  //getting all catHotel
  getHotels(): Observable<CatHotel[]> 
  {
    return this.catHotel;
  }

  //getting single cat hotel
  getHotel(id: string): Observable<CatHotel> 
  {
    return this.catHotelCollection.doc<CatHotel>(id).valueChanges().pipe(
        take(1),
        map(hotel => {
          hotel.id = id;
          return hotel;
        })
    );
  }

  //create new hotel
  addHotel(hotel: CatHotel): Promise<DocumentReference> 
  {
    return this.catHotelCollection.add(hotel);
  }

  //update hotel details
  updateHotel(hotel: CatHotel): Promise<void> 
  {
    return this.catHotelCollection.doc(hotel.id).update(hotel);
  }

  //delete hotel
  deleteHotel(id: string): Promise<void> 
  {
    return this.catHotelCollection.doc(id).delete();
  }

  //--------------------------------------CAT SPA & GROOMING-----------------------------------------------
  //getting all catSpa
  getSpas(): Observable<CatSpa[]> 
  {
    return this.catSpa;
  }

  //getting single cat spa
  getSpa(id: string): Observable<CatSpa> 
  {
    return this.catSpaCollection.doc<CatSpa>(id).valueChanges().pipe(
        take(1),
        map(spa => {
         spa.id = id;
          return spa;
        })
    );
  }
  
  //create new spa
  addSpa(spa: CatSpa): Promise<DocumentReference> 
  {
    return this.catSpaCollection.add(spa);
  }

  //update spa details
  updateSpa(spa: CatSpa): Promise<void> 
  {
    return this.catSpaCollection.doc(spa.id).update(spa);
  }

  //delete spa
  deleteSpa(id: string): Promise<void> 
  {
    return this.catSpaCollection.doc(id).delete();
  }

  //--------------------------------------CAT VACCINE & NEUTER-----------------------------------------------
  //getting all catVaccine
  getVaccines(): Observable<CatVaccine[]> 
  {
    return this.catVaccine;
  }

  //getting single cat vaccine
  getVaccine(id: string): Observable<CatVaccine> 
  {
    return this.catVaccineCollection.doc<CatVaccine>(id).valueChanges().pipe(
        take(1),
        map(vaccine => {
         vaccine.id = id;
          return vaccine;
        })
    );
  }
  
  //create new vaccine
  addVaccine(vaccine: CatVaccine): Promise<DocumentReference> 
  {
    return this.catVaccineCollection.add(vaccine);
  }

  //update vaccine details
  updateVaccine(vaccine: CatVaccine): Promise<void> 
  {
    return this.catVaccineCollection.doc(vaccine.id).update(vaccine);
  }

  //delete vaccine
  deleteVaccine(id: string): Promise<void> 
  {
    return this.catVaccineCollection.doc(id).delete();
  }

  //-----------------------------------------CAT GRAB-----------------------------------------------
  //getting all catGrab
  getGrabs(): Observable<CatGrab[]> 
  {
    return this.catGrab;
  }

  //getting single cat grab
  getGrab(id: string): Observable<CatGrab> 
  {
    return this.catGrabCollection.doc<CatGrab>(id).valueChanges().pipe(
        take(1),
        map(grab => {
         grab.id = id;
          return grab;
        })
    );
  }
  
  //create new grab
  addGrab(grab: CatGrab): Promise<DocumentReference> 
  {
    return this.catGrabCollection.add(grab);
  }

  //update grab details
  updateGrab(grab: CatGrab): Promise<void> 
  {
    return this.catGrabCollection.doc(grab.id).update(grab);
  }

  //delete grab
  deleteGrab(id: string): Promise<void> 
  {
    return this.catGrabCollection.doc(id).delete();
  }

  //-----------------------------------------CAT PRODUCT-----------------------------------------------
  //getting all cat product
  getProducts(): Observable<CatProduct[]> 
  {
    return this.catProduct;
  }

  //getting single cat product
  getProduct(id: string): Observable<CatProduct> 
  {
    return this.catProductCollection.doc<CatProduct>(id).valueChanges().pipe(
        take(1),
        map(product => {
          product.id = id;
          return product;
        })
    );
  }
  
  //create new product
  addProduct(product: CatProduct): Promise<DocumentReference> 
  {
    return this.catProductCollection.add(product);
  }

  //update product details
  updateProduct(product: CatProduct): Promise<void> 
  {
    return this.catProductCollection.doc(product.id).update(product);
  }

  //delete product
  deleteProduct(id: string): Promise<void> 
  {
    return this.catProductCollection.doc(id).delete();
  }

  //--------------------------------------CAT HOTEL BOOKING-----------------------------------------------
  //getting all catHotel booking
  getHotelBookings(): Observable<BookingHotel[]> 
  {
    return this.hotelBooking;
  }

  //getting single cat hotel booking
  getHotelBooking(id: string): Observable<BookingHotel> 
  {
    return this.catHotelBookingCollection.doc<BookingHotel>(id).valueChanges().pipe(
        take(1),
        map(bookinghotel => {
          bookinghotel.id = id;
          return bookinghotel;
        })
    );
  }

  //create new hotel booking
  submitBookingHotel(bookinghotel: BookingHotel): Promise<DocumentReference> 
  {
    return this.catHotelBookingCollection.add(bookinghotel);
  }

  // submitBookingHotel(something: { book: {}; uid: string }) 
  // {
  //   this.usersCollection.doc(something.uid).update({ booking: something.book, catnem : something.book });
  //   console.log({ something });
   
  // }
  
  //update hotel details
  updateBookingHotel(bookinghotel: BookingHotel): Promise<void> 
  {
    return this.catHotelBookingCollection.doc(bookinghotel.id).update(bookinghotel);
  }

  //delete hotel
  deleteBookingHotel(id: string): Promise<void> 
  {
    return this.catHotelBookingCollection.doc(id).delete();
  }

  //--------------------------------------CAT SPA & GROOMING BOOKING-----------------------------------------------
  //getting all catSpa booking
  getSpaBookings(): Observable<BookingSpa[]> 
  {
    return this.spaBooking;
  }

  //getting single cat spa booking
  getSpaBooking(id: string): Observable<BookingSpa> 
  {
    return this.catSpaBookingCollection.doc<BookingSpa>(id).valueChanges().pipe(
        take(1),
        map(bookingspa => {
         bookingspa.id = id;
          return bookingspa;
        })
    );
  }
  
  //create new spa booking
  submitBookingSpa(bookingspa: BookingSpa): Promise<DocumentReference> 
  {
    return this.catSpaBookingCollection.add(bookingspa);
  }

  //update spa details
  updateBookingSpa(bookingspa: BookingSpa): Promise<void> 
  {
    return this.catSpaBookingCollection.doc(bookingspa.id).update(bookingspa);
  }

  //delete spa
  deleteBookingSpa(id: string): Promise<void> 
  {
    return this.catSpaBookingCollection.doc(id).delete();
  }

  //--------------------------------------CAT VACCINE & NEUTER BOOKING---------------------------------------------
  //getting all catVaccine
  getVaccBookings(): Observable<BookingVacc[]> 
  {
    return this.vaccBooking;
  }

  //getting single cat vaccine
  getVaccBooking(id: string): Observable<BookingVacc> 
  {
    return this.catVaccBookingCollection.doc<BookingVacc>(id).valueChanges().pipe(
        take(1),
        map(vaccine => {
         vaccine.id = id;
          return vaccine;
        })
    );
  }
  
  //create new vaccine
  submitBookingVacc(bookingvacc: BookingVacc): Promise<DocumentReference> 
  {
    return this.catVaccBookingCollection.add(bookingvacc);
  }

  //update vaccine details
  updateBookingVacc(bookingvacc: BookingVacc): Promise<void> 
  {
    return this.catVaccBookingCollection.doc(bookingvacc.id).update(bookingvacc);
  }

  //delete vaccine
  deleteBookingVacc(id: string): Promise<void> 
  {
    return this.catVaccBookingCollection.doc(id).delete();
  }

  //-----------------------------------------CAT GRAB BOOKING-----------------------------------------------
  //getting all catGrab
  getGrabBookings(): Observable<BookingGrab[]> 
  {
    return this.grabBooking;
  }

  //getting single cat grab
  getGrabBooking(id: string): Observable<BookingGrab> 
  {
    return this.catGrabBookingCollection.doc<BookingGrab>(id).valueChanges().pipe(
        take(1),
        map(grab => {
         grab.id = id;
          return grab;
        })
    );
  }
  
  //create new grab
  submitBookingGrab(bookinggrab: BookingGrab): Promise<DocumentReference> 
  {
    return this.catGrabBookingCollection.add(bookinggrab);
  }

  //update grab details
  updateBookingGrab(bookinggrab: BookingGrab): Promise<void> 
  {
    return this.catGrabBookingCollection.doc(bookinggrab.id).update(bookinggrab);
  }

  //delete grab
  deleteBookingGrab(id: string): Promise<void> 
  {
    return this.catGrabBookingCollection.doc(id).delete();
  }

  //-----------------------------------------PURCHASED ITEM-----------------------------------------------
  //getting all item
  getPurchasedItems(): Observable<PurchasedItem[]> 
  {
    return this.purchasedItem;
  }

  //getting single item
  getPurchasedItem(id: string): Observable<PurchasedItem> 
  {
    return this.purchasedItemCollection.doc<PurchasedItem>(id).valueChanges().pipe(
        take(1),
        map(item => {
         item.id = id;
          return item;
        })
    );
  }
  
  //create new item
  submitPurchasedItem (item: PurchasedItem): Promise<DocumentReference> 
  {
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
  getContents(): Observable<Content[]> 
  {
    return this.contentItem;
  }

  //getting single item
  getContent(id: string): Observable<Content> 
  {
    return this.contentCollection.doc<Content>(id).valueChanges().pipe(
        take(1),
        map(content => {
         content.id = id;
          return content;
        })
    );
  }
  
  //create new item
  addContent (content: Content): Promise<DocumentReference> 
  {
    return this.contentCollection.add(content);
  }

  //update content details
  updateContent(content: Content): Promise<void> 
  {
    return this.contentCollection.doc(content.id).update(content);
  }

  //delete hotel
  deleteContent(id: string): Promise<void> 
  {
    return this.contentCollection.doc(id).delete();
  }


  // submitBookingUser(something:{ book: {}; uid: string }) {
  //   this.usersCollection
  //     .doc(something.uid)
  //     .update({ booking: something.book });
  //   console.log({ something });
  // }

}