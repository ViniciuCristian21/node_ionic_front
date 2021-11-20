import { Component, OnInit } from '@angular/core';
import { api } from 'src/services/api';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  allTodo: any = [];
  constructor() {}

  ngOnInit() {
    this.confirmData();
  }

  confirmData() {
    const IsHaveTodo = this.allTodo == null || 0 ? true : false;
    if (!IsHaveTodo) {
      this.getAll();
    }
  }

  doRefresh(event) {
    this.allTodo = []
    this.getAll();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getAll() {
    try {
      api.get('text/list').then((response) => {
        response.data.forEach((element) => {
          this.allTodo.push({
            id: element.id,
            text: element.text,
          });
        });
      });

      console.log(this.allTodo);
    } catch (error) {
      console.log(error);
    }
  }

  deleteTodo(id: string) {
    try {

      api.delete(`/text/${id}`).then((response) => {
        console.log(response.data);
      });

    } catch (error) {
      console.log(error)
    }
  }
}
