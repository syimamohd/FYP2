import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Note} from '../model/Note';
import {CatHotel} from '../model/CatHotel';
import {CatSpa} from '../model/CatSpa';
import {CatVaccine} from '../model/CatVaccine';
import {CatGrab} from '../model/CatGrab';
import {CatProduct} from '../model/CatProduct';

import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService 
{
  private notes: Observable<Note[]>;
  private catHotel: Observable<CatHotel[]>;
  private catSpa: Observable<CatSpa[]>;
  private catVaccine: Observable<CatVaccine[]>;
  private catGrab: Observable<CatGrab[]>;
  private catProduct: Observable<CatProduct[]>;

  private noteCollection: AngularFirestoreCollection<Note>;
  private catHotelCollection: AngularFirestoreCollection<CatHotel>;
  private catSpaCollection: AngularFirestoreCollection<CatSpa>;
  private catVaccineCollection: AngularFirestoreCollection<CatVaccine>;
  private catGrabCollection: AngularFirestoreCollection<CatGrab>;
  private catProductCollection: AngularFirestoreCollection<CatProduct>;

  constructor(private afs: AngularFirestore) 
  {
    //define collection
    this.noteCollection = this.afs.collection<Note>('notes');
    this.catHotelCollection = this.afs.collection<CatHotel>('catHotel');
    this.catSpaCollection = this.afs.collection<CatSpa>('catSpa');
    this.catVaccineCollection = this.afs.collection<CatVaccine>('catVaccine');
    this.catGrabCollection = this.afs.collection<CatGrab>('catGrab');
    this.catProductCollection = this.afs.collection<CatProduct>('catProduct');

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
    return this.catHotelCollection.doc(hotel.id).update({ hotelName: hotel.hotelName, hotelDetails: hotel.hotelDetails, hotelPrice: hotel.hotelPrice });
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
    return this.catSpaCollection.doc(spa.id).update({ spaName: spa.spaName, spaDetails: spa.spaDetails, spaPrice: spa.spaPrice });
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
    return this.catVaccineCollection.doc(vaccine.id).update({ vaccineName: vaccine.vaccineName, vaccineDetails: vaccine.vaccineDetails, vaccinePrice: vaccine.vaccinePrice });
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
    return this.catGrabCollection.doc(grab.id).update({ grabName: grab.grabName, grabDetails: grab.grabDetails, grabPrice: grab.grabPrice });
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
    return this.catProductCollection.doc(product.id).update({ productName: product.productName, productDetails: product.productDetails, productPrice: product.productPrice });
  }

  //delete product
  deleteProduct(id: string): Promise<void> 
  {
    return this.catProductCollection.doc(id).delete();
  }
}