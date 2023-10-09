import { Link } from 'react-router-dom';
import notfound from '../../../assets/notfound.jpg'
import { Button } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className='text-center'>
            <div className='min-vh-50 d-flex justify-content-center align-items-center'>
            <img src={notfound} alt="" className='w-50 h-50' />
        </div>
        <Link to='/'><Button variant='primary'>Home Page</Button></Link>
        </div>
    );
};

export default NotFound;