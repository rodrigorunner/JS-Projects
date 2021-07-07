import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public navList: any[]= [
    {
      route: 'home',
      icon: 'home',
      label: 'Home'
    },
    {
      route: 'usuarios',
      icon: 'account_circle',
      label: 'Cadastro de Usuário'
    },
    {
      route: 'ocorrencia',
      icon: 'sticky_note_2',
      label: 'Ocorrência'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
