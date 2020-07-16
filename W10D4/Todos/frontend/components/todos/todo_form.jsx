import React from 'react';
import { uniqueId } from '../../util/util';

export default class TodoForm extends React.Component {
    constructor(props) {
        super();

        this.sendTodo = this.sendTodo.bind(this);
    }

    sendTodo(e) {
        e.preventDefault();
        let { receiveTodo } = this.props;
        
    }

    // id -> uniqueId
    // title : input
    // body : textarea
    // done -> false : checkbox

    // update(field, e) {
    //     this.setState({ [field]: e.target.value });
    // }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        }
    }

    render() {
       
        return (
            <div>Form Placeholder...
                <label>Title
                    <input/>
                </label>
                <label>Body
                    <input onChange={this.update("field")}/>
                </label>
                <label>Done?
                    <input type="checkbox"/>
                </label>
                <button onClick={this.sendTodo}>Submit</button>

            </div>
        );
    }
}