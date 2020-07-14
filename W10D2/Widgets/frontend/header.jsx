import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     content: "First"
        // }
        this.contents = ["First","Second","Third"];
    }

    // changeContent(index){
    //     this.setState({content: this.contents[index]});
    // }

    render(){
        return(
            <>
                {this.contents[this.props.index]}
            </>
        )
    }
}

export default Header;