import { SIGN_IN , SIGN_OUT } from '../Actions/types'


const INIT_STATE ={
    issignedin : null,
    userID: null
}

export default (state=INIT_STATE,action ) => {

    switch(action.type){

        case SIGN_IN:
            return { ...state , issignedin:true, userID: action.payload }
        case SIGN_OUT:
            return { ...state , issignedin:false, userID: null }  
        default:
            return state;

    }

}