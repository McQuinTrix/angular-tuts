/**
  Decorators are Typescript feature to enhance your classes
*/

import { Component } from '@angular/core';

// Tells angular what to do with this class
// selector can also be used as [app-server] as attribute selector, class selector '.app-server'
// id selectors and pseudo selector style wont work

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html'
})

export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
