import { show } from '../scripts/reducers/toastSlice';
import { useDispatch } from 'react-redux';
import Button from '../items/Button';

export default function Cashier() {
    const dispatch = useDispatch();
    
    return (    
        <div>
            <button onClick={() => dispatch(show({
                content: <span>Update tersedia <Button label="update" /></span>
            }))}>me</button>
        </div>
    )
}