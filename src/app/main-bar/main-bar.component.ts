import { Component} from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'ngbd-collapse-navbar',
	standalone: true,
	imports: [NgbCollapseModule, RouterLink],
	templateUrl: './main-bar.component.html',

})
export class NgbdCollapseNavbar {
	isMenuCollapsed = true;
}