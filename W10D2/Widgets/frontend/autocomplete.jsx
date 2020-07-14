import React from 'react';

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ''
        }

    }

    search(string, begins){
        if
    }

//names.filter((name, index)=>name.length>2)
    render () {
        const names = this.props.names.map((name,index) => {
            return <li key={index}>{name}</li>
         });
        return (
            <>  
                <input></input>
                <ul>
                    { names }
                </ul>
            </>
        );
    }


}

export default Autocomplete;