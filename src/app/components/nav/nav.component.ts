import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    NzButtonModule,
    NzIconModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  isOpen = false;
  get clipPathStyle(): string {
    return this.isOpen
      ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
      : 'polygon(0 0, 100% 0, 100% 0, 0 0)';
  }
}
