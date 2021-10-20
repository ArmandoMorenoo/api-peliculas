import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";
import styles from "../css/Search.module.css";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchText] = useState();
  const history = useHistory();

  useEffect(()=>{
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText);
  };

  return (
    <form className={styles.search__container} onSubmit={handleSubmit}>
      <div className={styles.search__box}>
        <input
          className={styles.search__input}
          type="text"
          placeholder="Buscar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.search__button} type="submit">
          <FiSearch size={20} color="rgba(193, 193, 226, 0.575)" />
        </button>
      </div>
    </form>
  );
}
