import React from 'react';
import { uniqueId } from '../../util/util';

export default class TodoForm extends React.Component {
    constructor(props) {
        super();
        //debugger
        this.state = {         
            title: '',
            body: '',
            done: false
        };
        this.sendTodo = this.sendTodo.bind(this);
    }

    sendTodo(e) {
        e.preventDefault();
        let { receiveTodo, createTodo } = this.props;
        let { title, body, done } = this.state;
        //debugger
        createTodo({ id: uniqueId(), title, body, done });
    }

    // id -> uniqueId
    // title : input
    // body : textarea
    // done -> false : checkbox

    // update(field, e) {
    //     this.setState({ [field]: e.target.value });
    // }

    update(field, value) {
        return e => {
            e.preventDefault();
            this.setState({ [field]: (value!==undefined) ? value : e.target.value });
        }
    }

    render() {
       let { done } = this.state;
        return (
            <form onSubmit={this.sendTodo}>

                <label>Title
                    <input onChange={this.update("title")}/>
                </label>

                <label>Body
                    <input onChange={this.update("body")}/>
                </label>

                <label>Done?
                    <button onClick={this.update("done", !done)}>{done ? "Undone" : "Done"}</button>
                </label>
                <p></p>
                <input type="submit" value="Submit"/>
                
            </form>
        );
    }
}