import { Component, OnInit } from '@angular/core';
import { api } from 'src/services/api';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  allTodo: any = [];
  constructor() { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    api.get('text/list').then(response => {
      response.data.forEach(element => {
      this.allTodo.push({
        id: element.id,
        text: element.text,
      })
      });;
    })

    console.log(this.allTodo)
  }
  save(){
    api.post('text', {
      text: 'Qual quer coisa',
    }).then(response => {
      console.log(response.data)
    })
  }

}