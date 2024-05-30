import React, {Component} from "react";


class Greetings extends Component{
    constructor(props) {
        super(props)
      
        this.state = {
           isLogIn: false
        }
      }
    render(){
        return(
       this.state.isLogIn? 
       <div>Welcome Visuals</div>:
       <div>Welcome Guest</div>
        )
// if(this.state.isLogIn){
//     return <div>Welcome Visuals</div>
// }
// else{
//     return <div>Welcome Guest</div>
// }

        // return(
        //    <div>
        //     <div>Welcome Visuals</div>
        //    </div>
        // )
    }
}
export default Greetings;
