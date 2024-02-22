import {useSelector} from "react-redux";

export function useAuth() {
    let {email, token, id} = useSelector(state => state.user);
    if(id === 'TjYWggN7AVRYFG5pvEeE7ifUoJR2') id = 1
    return {
        isAuth: !!token,
        email, 
        token, 
        id
    };
}