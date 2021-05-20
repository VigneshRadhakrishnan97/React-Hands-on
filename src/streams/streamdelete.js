import React from 'react' 
import Modal from '../Model'
import history from '../history'
import { connect } from 'react-redux'
import { fetchstream, deletestream } from '../Actions'
import { Link } from 'react-router-dom'

class StramDelete extends React.Component {

   componentDidMount(){
    if(!this.props.currentstream)
    this.props.fetchstream(this.props.match.params.id);

   };

    renderconent(){
        if(!this.props.currentstream)
        return "Are you sure you want to delete this? ";

        return `Are you sure you want to delete this title : ${this.props.currentstream.title} ?`;
    }

    render()
    {
    

    const actions=(
        <React.Fragment>
            <button className="ui negative button" onClick={()=>this.props.deletestream(this.props.match.params.id)} >Delete</button>
            
            <Link to="/" className="ui button" >Cancel</Link>
        </React.Fragment>
    );

    return ( 
        <Modal 
        title="DeleteStream"
        content={this.renderconent()}
        actions={actions}
        onDismiss={()=>history.push('/')}
        />
    );
    }
}


const mapstatetoprops= (state,ownprops)=>{
   // console.log(state.streams);
    return ({currentstream : state.streams[ownprops.match.params.id]  });

}

export default connect(mapstatetoprops,{fetchstream,deletestream})(StramDelete);