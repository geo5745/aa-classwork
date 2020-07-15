import React from 'react';

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ''
        }

    }

    setInput (e) {
        e.preventDefault();
        let val = e.target.value;
        this.setState({ inputVal: val });

    }

    search(string, begins){
        string = string.toLowerCase();
        begins = begins.toLowerCase();
        let sliceNum = begins.length;
        return string.slice(0,sliceNum) === begins;
    }

    render () {
        const filteredNames = this.props.names.filter(name => this.search(name,this.state.inputVal));
        const names = filteredNames.map((name,index) => {
            return <li key={index}>{name}</li>
         });
        return (
            <>  
                <input value={this.state.inputVal} onChange={this.setInput.bind(this)}></input>
                <ul>
                    { names }
                </ul>
            </>
        );
    }


}

export default Autocomplete;