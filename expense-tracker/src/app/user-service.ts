import {Injectable, signal } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from '@firebase/firestore';
import { db } from './firebase.config';

export interface User{
  id?: string, 
  name: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = signal<User[]>([]);

  private userCollection = collection(db, 'users');

  loadUsers(){
    onSnapshot(this.userCollection, snapshot => {
      const data = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      })) as User[];

      this.users.set(data);
    });
  }
  
  async addUser(user: User) {
    await addDoc(this.userCollection, user);
  }
  
  async updateUser(id: string, user: Partial<User>){
    const userRef = doc(db, 'users', id);
    await updateDoc(userRef, user);

  }
  
  async deleteUser(id: string){
    const userRef = doc(db, 'users', id);
    await deleteDoc(userRef);
  }
}
