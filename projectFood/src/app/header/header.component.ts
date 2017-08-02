/*
Step 1: import { Component } from '@angular/core'
Step 2: @Component({selector: '', templateUrl: ''})
Step 3: export class nameComponent{}
-------------------------------------
Step 4: add to module ts file : import { nameComponent } from './folder/nameComponent'
Step 5: @NgModule({ declarations: [nameComponent, ..] ...})

Or

ng generate component name
ng g c name
ng g c name --spec false
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}
