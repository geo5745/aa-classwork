import React from 'react';
import Header from './header.jsx'

class Tab extends React.Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
        this.titles = ["1","2","3"];
        this.contents = ["First","Second","Third"];


    }

    render () {
        const tabList = this.titles.map((title,index) => {
            let listID;
            if(this.state.index === index){
                listID = "selected"
            }else{
                listID = ""
            }
            return <li id={listID} key={index} ><h1 onClick={()=>this.setState({index:index})} key={index} >{title}</h1></li>
         });
        const content = <Header index = {this.state.index}/>

         // <li  >
         // <li id="selected">
         // <li >

        return (
            <>
            <div id="tab">
                <ul id="tab-list">
                    {tabList}
                </ul>
                <article>
                    {content}
                </article>
            </div>
            </>
        );
    }








}

export default Tab;