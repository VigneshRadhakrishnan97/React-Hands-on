import React from 'react'
import { connect } from 'react-redux'
import { SignIn, SignOut } from '../Actions'

class GoogleAuth extends React.Component
{
    

    componentDidMount(){

        window.gapi.load('client:auth2', ()=>{

            window.gapi.client.init({
                clientId:'365030527657-19it30pd7ssn24kdqacoelgeicfqas3b.apps.googleusercontent.com',
                scope:'email'
            }).then(()=> {

                this.Auth=window.gapi.auth2.getAuthInstance();
                    this.AuthDynamic (this.Auth.isSignedIn.get() );
                    this.Auth.isSignedIn.listen(this.AuthDynamic);
            });
        });
    }
    AuthDynamic = (issignedin)=>{
        if(issignedin)
        this.props.SignIn(this.Auth.currentUser.get().getId() );
        else
        this.props.SignOut();

    }

    onSignIN=()=>{

        this.Auth.signIn();
    }

    onSignOUT=()=>{

        this.Auth.signOut();
    }


    renderAuthButton(){
        if(this.props.issignedin === null )
        {
                return null
        } else if (this.props.issignedin)
        {
            return (
                <button className="ui red google button" onClick={this.onSignOUT} >
                    <i className="google icon" />
                    SignOUT
                </button>
                );
        } else
        {
            return (
                <button className="ui red google button" onClick={this.onSignIN} >
                    <i className="google icon" />
                    Sign In with Google
                </button>
                );
        }
    }

    render(){

       

        return(
            <div>{this.renderAuthButton()}</div>
        );
    }
}

const mapstatetoprops = (state) =>{

    return { issignedin : state.auth.issignedin }
}

export default connect(mapstatetoprops,{ SignIn,SignOut })(GoogleAuth);