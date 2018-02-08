import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { PromiseType } from 'protractor/built/plugins';


@Injectable()
export class AuthenticationService {

  private user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) { 
    this.user = afAuth.authState;
  }

  login(user: User): Promise<void> {
    console.log("Here :: "+ this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password));
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  authUser() {
    return this.user;
  }
}
