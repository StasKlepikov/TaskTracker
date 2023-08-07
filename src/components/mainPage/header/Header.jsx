import style from './Header.module.css';

import logo from '../../../assets/logo.png';

import SearchBar from '../../searchBar/SearchBar';
import DateField from '../../dateField/DateField';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../../services/actions/searchAction';

function Header() {

    const dispatch = useDispatch();

    return (
        <header className={style.header}>
            <div className={style.header__name}>
                <img src={logo} alt="logo" />
                <h1>TaskTracker</h1>
            </div>
            <div className={style.header__filters}>
                <SearchBar />
                <DateField
                    onChange={ date => {dispatch(setSearchValue({ date }))} } />
                <button
                    className={style.resetBtn}
                    onClick={() => { dispatch(setSearchValue({ date: null })) }}>Show all</button>
            </div>
        </header>
    );
 }

export default Header;