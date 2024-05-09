import { useState } from 'react';
import { toast } from 'react-hot-toast';
import style from'./SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchTerm.trim()) {
            toast.error('Please enter a search term');
            return;
        }
        onSubmit(searchTerm);
        setSearchTerm('');
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    }

    return (
        <div className={style.headerContainer}> 
        <header className={style.SearchBar}>
            <form onSubmit={handleSubmit}>
                <input className={style.SearchInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown} 
                />
                <button className={style.SearchButton} type="submit">Search</button>
            </form>
        </header>
        </div>
    );
};

export default SearchBar;