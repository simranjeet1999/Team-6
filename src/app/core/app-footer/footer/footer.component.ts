import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public router: Router) {
  }
  isLoggedIn(): boolean {
    return (this.router.url === '/home' || this.router.url === '/dashboard');
  }

  navigateToCorrectLink(link: string) {
    
    let url = '';
    switch (link) {
      case 'linkedin':
        url = '';
        break;

      case 'github':
        url = '';
        break;

      case 'sourceCode':
        url = '';
        break;

      default:
        url = '';
    }

    window.open(url);
  }

}
