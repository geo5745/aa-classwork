
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {

//console.log(htmlElement);
    // debugger;
    if(htmlElement.children.length > 0){
        // debugger;
        Array.from(htmlElement.children).forEach(el => htmlElement.removeChild(el));
    }
    // debugger;
    const node = document.createElement("p");                                                     // Create a <li> node
    const textnode = document.createTextNode(string);        // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    htmlElement.appendChild(node);     // Append <li> to <ul> with id="myList"

};

htmlGenerator('Party Time.', partyHeader);

//export default warmUp; // "default" means export the entire page


//module.exports = warmUp;
