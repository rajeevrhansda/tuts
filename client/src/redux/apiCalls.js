import axios from 'axios'
import { updateStart, updateSuccess, updateError } from "./userSlice";

export const updateUser = async (user, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.post("http://localhost:8000/api/user/123/update", user);
        console.log(res.data);
        dispatch(updateSuccess(res.data));
    } catch (err) {
        dispatch(updateError());
    }
}