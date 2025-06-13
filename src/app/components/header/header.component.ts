import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

public isAdmin: boolean = false;
  isActive(route: string): boolean {
    return this.router.url === route;
  }

  logout(): void {
    console.log('Logout clicked');
  }
}