import React, {Component} from 'react';
import {observable,action} from 'mobx';
import {observer,inject} from 'mobx-react'; 
import PropTypes from 'prop-types';

@inject("store")
@observer
class TodoBox extends Component  {

  state={
    themeColor:"red"
  }
  @observable aaa="aname:aaa"

  componentDidMount() {
    let self = this.props;
    setInterval(action(function () {
      self.store.timer += 1;
    }), 1000);
  }

  render() {

    console.log('render');
    return (
      <div>
        <ul>
          { /* 把 finishedTodos 换成 todos，点击修改标题就会在控制台打印 "render".*/ }
          {this.props.store.todos.map(
            (todo,index) => <li key={index}>{todo.title}</li>
          )}
        </ul>
        <div>
          <input type="button" onClick={() => {
            this.props.store.changeTodoTitle({index:0,title:"修改后的todo标题"});
          }} value="修改标题"/>
          <p>{this.props.store.zuj}</p>
          <p>{this.props.store.timer}</p>
          <p>{this.props.store.person.name}</p>
          <p>{this.aaa}-{this.state.themeColor}</p>
        </div>
      </div>
    )
  }
}

export default TodoBox
