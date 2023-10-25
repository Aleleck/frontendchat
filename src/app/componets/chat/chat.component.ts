import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  searchQuery = '';
  chatList: { name: string, type: string }[] = [];

  ngOnInit() {
    // Simulación de una lista de usuarios y grupos
    this.chatList = [
      { name: 'Usuario 1', type: 'user' },
      { name: 'Usuario 2', type: 'user' },
      { name: 'Grupo 1', type: 'group' },
      { name: 'Usuario 3', type: 'user' },
      { name: 'Grupo 2', type: 'group' },
    ];
  }

  showCreateGroup: boolean = false;

  // Método para abrir el componente "Crear Grupos"
  openCreateGroupModal() {
    this.showCreateGroup = true;
  }

  // Método para cerrar el componente "Crear Grupos"
  closeCreateGroupModal() {
    this.showCreateGroup = false;
  }
}
