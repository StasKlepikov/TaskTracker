import './SearchBar.css';

import search_icon from '../../assets/icons/search.png';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../services/actions/searchAction';

function SearchBar() { 

    const dispatch = useDispatch();
    
    const handleChange = searchValue => { 
        dispatch(setSearchValue({searchValue}))
    };

    return (
        <div className='search'>
            <input
                type="text"
                onChange={e => console.log(handleChange(e.target.value)) }
                placeholder='Search...' />
            <img src={search_icon} alt="search_icon" />
        </div>
    );
}

export default SearchBar;