import { useState, ChangeEvent, KeyboardEvent  } from 'react';
import { toast } from 'react-hot-toast';
import style from'./SearchBar.module.css';


interface SearchBarProps {
    onSubmit: (searchTerm: string) => void;
  }
  
  const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!searchTerm.trim()) {
        toast.error('Please enter a search term');
        return;
      }
      onSubmit(searchTerm);
      setSearchTerm('');
    };
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };
  
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSubmit(e as any);
      }
    };
  
    return (
      <div className={style.headerContainer}>
        <header className={style.SearchBar}>
          <form onSubmit={handleSubmit}>
            <input
              className={style.SearchInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={searchTerm}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <button className={style.SearchButton} type="submit">
              Search
            </button>
          </form>
        </header>
      </div>
    );
  };
  
  export default SearchBar;