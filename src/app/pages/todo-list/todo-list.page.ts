import { Todo } from './../../../entities/Todo';
import { Component, OnInit } from '@angular/core';
import { api } from 'src/services/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {
  todo: Todo;
  Uid: string;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.todo = new Todo();
    this.Uid = this.activatedRoute.snapshot.params['id'];
    console.log(this.Uid)
  }

  save(){
    if (this.Uid) {
      try {
        api.post("/text/update", {
          id: this.Uid,
          text: this.todo.text,
        }).then(response => {
          console.log(response.data)
        })
        this.router.navigate(['/todo/']);
      } catch (error) {
        console.log(error)
      }
    }else {
      try {
        api.post('text', {
          text: this.todo.text,
        }).then(response => {
          console.log(response.data)
        })
        this.router.navigate(['/todo/']);
      } catch (error) {
        console.log(error)
      }
    }
  }

}
