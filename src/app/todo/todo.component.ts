import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todos: Todo[] = [];
  newTodo:string;

  saveTodo(){
    if(this.newTodo){
      let todo = new Todo();
      todo.id = this.todos.length + 1;
      todo.name = this.newTodo;
      todo.isCompleted =true;
      todo.completed = false;
      this.todos.push(todo);
      this.newTodo = '';
    }
    else{
      alert("Lütfen görev alanını boş bırakmayınız!");
    }
  }
  deleteTodo(todoId: number) {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  }
  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }
  
}
