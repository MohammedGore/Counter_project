import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Count from './Count';
import Button from './Button';
import "semantic-ui-css/semantic.min.css"
import Greetings from './greetings';



// App Component
class App extends Component {

    state= {
        count: 0
    }

    incrementCount = id =>{
        this.setState( prevState =>{
            return{
                count: prevState.count + id
                 } 
        })
    }
    render(){
        return(
            <div>
                <Greetings />
            <div  style={{textAlign: 'center'}}>
                <Count counter={this.state.count}/>
               <Button incrementCount= {this.incrementCount} value={1}/>
               <Button incrementCount= {this.incrementCount} value={2}/>
               <Button incrementCount= {this.incrementCount} value={5}/>
               <Button incrementCount= {this.incrementCount} value={10}/>
               <Button incrementCount= {this.incrementCount} value={20}/>
               <Button incrementCount= {this.incrementCount} value={50}/>
               <Button incrementCount= {this.incrementCount} value={1000}/> 
            </div>
            </div>
        );
    };
} ;

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)