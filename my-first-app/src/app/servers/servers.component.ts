import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addServer = true;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  userName = '';
  created = false;
  testServers = ['Game Serv #1', 'Game Serv #2']

  constructor() {

  }

  ngOnInit() {
    const self = this;
    setTimeout(() => {
      self.addServer = false;
    }, 2000);
  }

  serverCreated() {
    this.created = true;
    this.testServers.push(this.serverName);
    this.serverName = '';
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  pass = false;
  list = [];

  btnClick() {
    this.pass = !this.pass;
    this.list.push(new Date());
  }
}
