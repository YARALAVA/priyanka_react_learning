import React,{Component} from  'react'

import  Toolbar  from '@material-ui/core/Toolbar'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'


import Button from '@material-ui/core/Button'
import { Route, Link } from 'react-router-dom';

import SignIn from '../Form/SignIn'
import SignUp from '../Form/SignUp'
import AboutUs from '../Form/AboutUs'
import axios from 'axios'
import classes from './Auth.css';
import Input from '../UI/Input'

import TypoGraphy from '@material-ui/core/Typography'
import actions from '../../componet/Form/actions/actionTypes'
import AddServiceProvider from '../../componet/Form/addServiceprovider'


class createForm extends React.Component {
//     state = { URL:"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDAgZbN-VFvH-3kyrGG5x5y4_NAyF6FL2g",
    
    
// }



//     singUpDataHandler=()=>{
//         const authData = {
//             email:"Rukmini@gmail.com",
//             password: 12345678,
//             returnSecureToken: true
//         };

//         axios.post(this.state.URL, authData)
//             .then(response => {
//                 console.log(response.data)

//                 // const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
//                 // localStorage.setItem('token', response.data.idToken);
//                 // localStorage.setItem('expirationDate', expirationDate);
//                 // localStorage.setItem('userId', response.data.localId);
//                 // dispatch(authSuccess(response.data.idToken, response.data.localId));
//                 // dispatch(checkAuthTimeout(response.data.expiresIn));
//             })
//             .catch(err => {
//                 console.log(err.response.data.error);
//             });

//         }



  
    render () {
        return (
            <div >
                
                
            <AppBar color="primary" position="static">
            <Toolbar>
              <TypoGraphy variant="title"
                color="inherit"
              >
                    <div className="createForm">
                
                <header>
                    <nav>
            
                        <ul>
                            <li><Link to="/SignIn">SignIn</Link></li>
                            <li><Link to ="/SignUp">SignUp</Link></li>
                            <li><Link to="/AboutUs">ADD ServiceProviders</Link></li>
                            
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
               
            </div>  
                
             </TypoGraphy>
            </Toolbar>
          </AppBar>
          
          <div>
               <Route path="/SignIn" exact component={SignIn} />
                <Route path="/SignUp" component={SignUp} />
                <Route path="/AboutUs" component={AddServiceProvider} />
          </div>
          </div>
          
        );
    }
}

// state = {
//     controls: {
//         email: {
//             elementType: 'input',
//             elementConfig: {
//                 type: 'email',
//                 placeholder: 'Mail Address'
//             },
//             value: '',
//             validation: {
//                 required: true,
//                 isEmail: true
//             },
//             valid: false,
//             touched: false
//         },
//         password: {
//             elementType: 'input',
//             elementConfig: {
//                 type: 'password',
//                 placeholder: 'Password'
//             },
//             value: '',
//             validation: {
//                 required: true,
//                 minLength: 6
//             },
//             valid: false,
//             touched: false
//         }
//     }
// }


// checkValidity(value, rules) {
//     let isValid = true;
//     if (!rules) {
//         return true;
//     }
    
//     if (rules.required) {
//         isValid = value.trim() !== '' && isValid;
//     }

//     if (rules.minLength) {
//         isValid = value.length >= rules.minLength && isValid
//     }

//     if (rules.maxLength) {
//         isValid = value.length <= rules.maxLength && isValid
//     }

//     if (rules.isEmail) {
//         const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
//         isValid = pattern.test(value) && isValid
//     }

//     if (rules.isNumeric) {
//         const pattern = /^\d+$/;
//         isValid = pattern.test(value) && isValid
//     }

//     return isValid;
// }

// inputChangedHandler = (event, controlName) => {
//     const updatedControls = {
//         ...this.state.controls,
//         [controlName]: {
//             ...this.state.controls[controlName],
//             value: event.target.value,
//             valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
//             touched: true
//         }
//     };
//     this.setState({controls: updatedControls});
// }

// submitHandler = (event) => {
//     event.preventDefault();
//     this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
// }

// render () {
//     const formElementsArray = [];
//     for ( let key in this.state.controls ) {
//         formElementsArray.push( {
//             id: key,
//             config: this.state.controls[key]
//         } );
//     }

//     const form = formElementsArray.map( formElement => (
//         <Input
//             key={formElement.id}
//             elementType={formElement.config.elementType}
//             elementConfig={formElement.config.elementConfig}
//             value={formElement.config.value}
//             invalid={!formElement.config.valid}
//             shouldValidate={formElement.config.validation}
//             touched={formElement.config.touched}
//             changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
//     ) );

//     return (
//         <div>
//         <div>
//              <AppBar color="primary" position="static">
//           <Toolbar>
//             <TypoGraphy variant="title"
//               color="inherit"
//             >
              
//            </TypoGraphy>
//           </Toolbar>
//         </AppBar>
//         </div>
//         <div className={classes.Auth}>
//             <form onSubmit={this.submitHandler}>
//                 {form}
//                 <Button btnType="Success">SUBMIT</Button>
//             </form>
//         </div>
//         </div>
//     );
// }
// }

// const mapDispatchToProps = dispatch => {
// return {
//     onAuth: (email, password) => dispatch(actions.auth(email, password))
// };
// };



export default createForm;