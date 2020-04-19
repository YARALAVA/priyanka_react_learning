import React,{Component} from 'react'

import AppBar from '@material-ui/core/AppBar'
import card from '@material-ui/core/Card'
import  Toolbar  from '@material-ui/core/Toolbar'

import Button from '@material-ui/core/Button'

import TypoGraphy from '@material-ui/core/Typography'
import actions from '../../componet/Form/actions/actionTypes'

import TextField from '@material-ui/core/TextField'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'
import Firebase from  '../../Config/confilg'

import axios from 'axios'
class addServiceProvider extends Component {
   
   
    
    state={
        user:'',
        email:'',
        address:''
       
    }



    handleChange=(e)=>{
      this.setState({
        [e.target.id]:e.target.value

      })

    }

    // handleEmail = event => {
    //     this.setState({ email: event.target.value });

    //     console.log(event.target.value)
    //   }
      
    //   handlePassword = event => {
    //     this.setState({ password: event.target.value });
    //     console.log(event.target.value)
    //   }

    handleClick=(e)=>{
      e.preventDefault();
      console.log(this.state);

      const db = Firebase.firestore();
  db.settings({
    timestampsInSnapshots: true
  });
  
  const userRef = db.collection("ServiceProviders").add({
      
    email:this.state.email,
    userName:this.state.user,
    address:this.state.address
  }).then(Response=>{
    console.log(Response)
  }) 

    }
  
        
       
    render(){
        return(
           
            
       
          <div  style={{alignItems:'center', height: '100vh'}}>
          <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <form>
                   
      <TextField
       label="Enter your SP_name"
       floatingLabelText="username"
       id="user"
       onChange ={this.handleChange}
      //  onChange = {(event) => this.setState({EmailId:newValue})}
       />
     <br/>
     <TextField
       label="Enter your SP_EmailId"
       floatingLabelText="EmailId"
       id="email"
       onChange ={this.handleChange}
      //  onChange = {(event) => this.setState({EmailId:newValue})}
       />
     <br/>
     <TextField
       
         label="Enter your SP_address"
         floatingLabelText="address"
         id="address"
       onChange ={this.handleChange}
      //    onChange = {(event) => this.setState({password:newValue})}
         />
         <br/>
         {/* <Button  onClick={this.handleClick}/> */}
         <br/>
         <br/>
         




         


  <Button onClick={this.handleClick} variant="outlined" color="primary">
  ADD SERVICEPROVIDER
</Button>
</form>
              
</div>

             
//         )
//     }
// }
// const style = {
//     margin: 15,
//    };
  )
}
}
export default addServiceProvider;