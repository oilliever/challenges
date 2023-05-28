import { Link } from 'react-router-dom';

export const Logo = () => {
    return (
        <Link to='/'>
            <div className='logo'>
                <p>CatWiki</p>
                <img
                    alt=''
                    src='https://static.thenounproject.com/png/6725-200.png'
                />
            </div>
        </Link>
    );
};
