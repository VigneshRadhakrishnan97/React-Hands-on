import React from 'react'
import { connect } from 'react-redux'
import { fetchstreams } from '../Actions'
import { Link } from 'react-router-dom'


class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchstreams();
    }

    renderAdmin(stream){
        if(stream.userID=== this.props.CurrentuserID)
        return(<div className="right floated content ">
            

            <Link to={`/streams/edit/${stream.id}`} className="ui primary  button" >Edit</Link>
            
            <Link to={`/streams/delete/${stream.id}`} className="ui negative  button" >Delete</Link>
            
             </div>);
    }

    renderlist() {

        return this.props.streams.map((stream) => {

            return (
                <div key={stream.id} className="item" >
                     {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" ></i>
                    <div className="content" >
                       <Link to={`/streams/${stream.id}`} className="header" >{stream.title}</Link> 
                        <div className="description" >
                            {stream.description}
                        </div>
                    </div>
                   
                </div>
            );
        })
    }

    renderCreate(){

        if(this.props.issignedin)
        return(
            <div style={{textAlign:"right"}}>
        
        <Link to='/streams/new' className="ui primary button" > Create Stream</Link>
        </div>
        );

    }
    render() {

        return (<div>
            <h2>Streams</h2>
            <div className="ui celled list">
                {this.renderlist()}
               
            </div>
            {this.renderCreate()}
        </div>);
    }

}

const mapstatetoprops = (state) => {

    return (
        { streams: Object.values(state.streams), CurrentuserID : state.auth.userID, issignedin: state.auth.issignedin });

}
export default connect(mapstatetoprops, { fetchstreams })(StreamList);