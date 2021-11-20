import { Todo } from './../../../entities/Todo';
import { Component, OnInit } from '@angular/core';
import { api } from 'src/services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {
  todo: Todo;
  constructor(private router: Router) { }

  ngOnInit() {
    this.todo = new Todo();
  }

  save(){
    api.post('text', {
      text: this.todo.text,
    }).then(response => {
      console.log(response.data)
    })
    this.router.navigate(['/todo/']);
  }

}
