import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as UserActionCreators from '../redux/actionCreator/actionCreator'

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(UserActionCreators, dispatch)
}