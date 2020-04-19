import React,{Component} from 'react'

import AppBar from '@material-ui/core/AppBar'
import card from '@material-ui/core/Card'
import  Toolbar  from '@material-ui/core/Toolbar'

import Button from '@material-ui/core/Button'

import TypoGraphy from '@material-ui/core/Typography'
import actions from '../../componet/Form/actions/actionTypes'

import TextField from '@material-ui/core/TextField'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'

import axios from 'axios'
class SignIn extends Component {
   
   
    
    state={
        userName:'',
        email:'',
        password :''
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

    
        var apiBaseUrl ="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDwvRLOBOTeDPb4BZfaAk74fY-5seQaclI"
        
       
        var self = this;
        var payload={
    
        
        "email":this.state.email,
        "password":this.state.password
        }
        axios.post(apiBaseUrl, payload)
        .then(function (response) {
        console.log(response);
        if(response.data.code == 200){
        console.log("Login successfull");
        alert("Login successfull")

        // var uploadScreen=[];
        // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
        // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
        // }
        // else if(response.data.code == 204){
        // console.log("Username password do not match");
        // alert("username password do not match")
        // }
        // else{
        // console.log("Username does not exists");
        // alert("Username does not exist");
        // }
        }
        })
        .catch(function (error) {
        console.log(error);
        alert(error)
        });
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
                         
            {/* <TextField
             label="Enter your Username"
             floatingLabelText="Username"
             onChange ={this.handleClick}
             />
           <br/> */}
           <TextField
             label="Enter your EmailId"
             floatingLabelText="EmailId"
             id="email"
             onChange ={this.handleChange}
            //  onChange = {(event) => this.setState({EmailId:newValue})}
             />
           <br/>
           <TextField
               type="password"
               label="Enter your Password"
               floatingLabelText="Password"
               id="password"
             onChange ={this.handleChange}
            //    onChange = {(event) => this.setState({password:newValue})}
               />
               <br/>
               {/* <Button  onClick={this.handleClick}/> */}
               <br/>
               <br/>
               



      
               


        <Button onClick={this.handleClick} variant="outlined" color="primary">
        SIGN IN
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
export default SignIn;