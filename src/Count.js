import React from "react";


// Count Component
const Count = props => {

    let styles;

    if(props.counter === 0){
        styles= {
            color: 'red'
        }
    }
    else if(props.counter>=1 && props.counter<10){
        styles= {
            color: 'yellow'
        }
    }
    else if (props.counter>=10 && props.counter<50){
        styles={
            color: 'green'
        }
    }
    else if (props.counter>=50){
        styles = {
            color: 'blue'
        }
    }
    return(
        <div>
            <br/>
         <h2 style={styles}>{props.counter}</h2>
         <br/>
         </div>
    );
};

export default Count;