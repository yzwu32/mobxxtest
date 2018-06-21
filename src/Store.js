
import {observable, action, computed, configure} from 'mobx';

configure({ enforceActions: true })

class Store {
  @observable zuj="prop值"
  
  @observable timer=0
  @observable person={name: "John",age: 42,showAge: false}

  @observable todos = [{
    title: "todo标题",
    done: false,
  },{
    title: "已经完成 todo 的标题",
    done: true,
  }];

  @action changeTodoTitle({index,title}){
    this.todos[index].title = title
  }

  @computed get finishedTodos () {
    return  this.todos.filter((todo) => todo.done)
  }
  

  @observable pendingRequestCount=0;
  // @action createRandomContact() {
  //   superagent
  //         .get('https://randomuser.me/api/')
  //         .set('Accept', 'application/json')
  //         .end(action("createRandomContact-callback", (error, results) => {
  //             if (error)
  //             console.error(error)
  //           else {
  //                   const data = JSON.parse(results.text).results[0];
  //                   const contact = new Contact(this, data.dob, data.name, data.login.username, data.picture)
  //                   contact.addTag('random-user');
  //                   this.contacts.push(contact);
  //                   this.pendingRequestCoun++;
  //               }
  //         }
  // }
  
}
const newStore = new Store();
export default newStore;