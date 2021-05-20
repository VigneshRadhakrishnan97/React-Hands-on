import _  from 'lodash'
import React from 'react' 
import { connect } from 'react-redux'
import { fetchstream , editstream } from '../Actions'
import StramForm from './StreamForm'


class StramEdit extends React.Component {

    componentDidMount(){

        if(!this.props.CurrentEdit)
        this.props.fetchstream(this.props.match.params.id);

    }

    onSubmit = (formprops) => {
        this.props.editstream(this.props.match.params.id,formprops);
        //console.log(formprops);
      };

    render()
    {
        if(!this.props.CurrentEdit)
        return <div>Loading...</div>

    return ( <div>
        <h3>Edit Stream</h3>
        <StramForm initialValues={_.pick(this.props.CurrentEdit,'title','description')} onSubmit={this.onSubmit}  />
    </div> );
    }
}

const mapstatetoprops= (state,ownprops) => {
    
    
 return {CurrentEdit:state.streams[ownprops.match.params.id]};
}

export default connect(mapstatetoprops,{fetchstream,editstream})(StramEdit);