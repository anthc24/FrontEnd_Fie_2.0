import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';


interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.css']
})
export class LoginIndexComponent implements AfterViewInit {
  @ViewChild('signUpButton') signUpButton!: ElementRef;
  @ViewChild('signInButton') signInButton!: ElementRef;
  @ViewChild('container') container!: ElementRef;

  @ViewChild('signUpName') signUpName!: ElementRef;
  @ViewChild('signUpEmail') signUpEmail!: ElementRef;
  @ViewChild('signUpPassword') signUpPassword!: ElementRef;
  @ViewChild('signInEmail') signInEmail!: ElementRef;
  @ViewChild('signInPassword') signInPassword!: ElementRef;

  userBD: Users = new Users()

  users: User[] = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' }
    
  ];

  constructor(
    private router: Router,
    private uS: UserService
  ) {}


  ngAfterViewInit(): void {
    this.signUpButton.nativeElement.addEventListener('click', () => {
      this.container.nativeElement.classList.add('right-panel-active');
    });

    this.signInButton.nativeElement.addEventListener('click', () => {
      this.container.nativeElement.classList.remove('right-panel-active');
    });
  }

  registerUser(): void {
    const name = this.signUpName.nativeElement.value.trim();
    const email = this.signUpEmail.nativeElement.value.trim();
    const password = this.signUpPassword.nativeElement.value.trim();

    if (!name || !email || !password) {
      alert('Todos los campos son obligatorios.');
      return;
    }
    this.userBD.correo = email
    this.userBD.username = name
    this.userBD.password = password
    console.log(this.userBD)

    this.uS.insert(this.userBD).subscribe((data) => {
      this.uS.list().subscribe((data) => {
        this.uS.setList(data);
      });
    })

    const newUser: User = { email, password };
    this.users.push(newUser);
    alert('Usuario registrado exitosamente!');
    // Limpiar los campos del formulario
    this.signUpName.nativeElement.value = '';
    this.signUpEmail.nativeElement.value = '';
    this.signUpPassword.nativeElement.value = '';
    
  }

  loginUser2(): void {
    const email = this.signInEmail.nativeElement.value.trim();
    const password = this.signInPassword.nativeElement.value.trim();
    const user = this.users.find(user => user.email === email && user.password === password);

    if (user) {
      alert('Inicio de sesión exitoso!');
      this.router.navigate(['/tienda'])
      
    } else {
      alert('Correo o contraseña inválidos.');
      // Limpiar los campos del formulario de inicio de sesión
      this.signInEmail.nativeElement.value = '';
      this.signInPassword.nativeElement.value = '';
    }
  }
  login() {
    const username = this.signInEmail.nativeElement.value.trim();
    const password = this.signInPassword.nativeElement.value.trim();

    this.uS.login(username, password).subscribe(
      (response) => {
        if (response) {
          // Handle successful login, e.g., store user data, redirect, etc.
          console.log('Login successful', response);
          // Redirect to a different page, e.g., home page
          this.router.navigate(['/tienda']);
        } else {
          // Handle login failure, e.g., show error message
          console.error('Login failed');
          alert('Invalid username or password');
        }
      },
      (error) => {
        // Handle error response
        console.error('Login error', error);
        alert('An error occurred during login');
      }
    );
  }


  

  


}
