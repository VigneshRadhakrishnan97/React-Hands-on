import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import StreamCreate from '../streams/streamcreate'
import StreamDelete from '../streams/streamdelete'
import StreamEdit from '../streams/streamedit'
import StreamList from '../streams/streamlist'
import StreamShow from '../streams/streamshow'
import Header from './Header'
import history from '../history'

const App= () => {
    

    return (
        <div className="ui continer">
  
        <Router history={history} >

        <div>
        <Header></Header>
            <div className="ui segment">
                <Switch>
           <Route path="/" exact component={StreamList} />
           <Route path="/streams/new" exact component={StreamCreate} />
           <Route path="/streams/edit/:id" exact component={StreamEdit} />
           <Route path="/streams/delete/:id" exact component={StreamDelete} />
           <Route path="/streams/:id" exact component={StreamShow} />
           </Switch>
        </div>
        </div>
        </Router>
        
        </div>
    );
}

export default App;