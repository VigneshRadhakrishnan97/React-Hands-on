import React from 'react' 
import {connect} from 'react-redux'
import {fetchstream} from '../Actions'

class StramShow extends React.Component {

    componentDidMount(){
        this.props.fetchstream(this.props.match.params.id);
    }
    render(){
    if(!this.props.currentstream)
    return <div>Loading...</div>

    const {title,description}=this.props.currentstream;
    return ( <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
        </div> );
    }
}

const mapstatetoprops=(state,ownpropss)=>{
    
    return ({currentstream : state.streams[ownpropss.match.params.id]  });

}

export default connect(mapstatetoprops,{fetchstream})(StramShow)