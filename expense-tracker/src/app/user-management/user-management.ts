import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../user-service';

@Component({
  selector: 'app-user-management',
  imports: [FormsModule],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css',
})
export class UserManagement {
  // Injecting UserService from user.service.ts
  userService = inject(UserService);

  name = signal<string>('');
  email = signal<string>('');

  selectedUser = signal<User | null>(null);

  // This is the hook method that will be called when the component is initialized
  ngOnInit(){
   this.userService.loadUsers();
  }
  //method called when user clicks on the Add User button.
  addUser() {
    const user: User = { name: this.name(), email: this.email() };
    this.userService.addUser(user);
    this.resetForm;
  }
  //resets form
  resetForm() {
    this.name.set('');
    this.email.set('');
    this.selectedUser.set(null);
  }

  selectUser(user:User) {
    this.selectedUser.set(user);
    this.name.set('this.name()');
    this.email.set('this.email()');
  }

  updateUser() {
    const user: User = {name: this.name(), email: this.email()};
    this.userService.updateUser(this.selectedUser()?.id!, user);
    this.resetForm();
  }
}
