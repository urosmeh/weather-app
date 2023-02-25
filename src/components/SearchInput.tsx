import { ChangeEvent, useState } from "react";
import classes from "./SearchInput.module.css";

export type SearchInputProps = {
  onSubmit: (value: string) => void;
  searchTerm: string;
  searchTermChangeHandler: any;
};
export const SearchInput = ({
  onSubmit,
  searchTerm,
  searchTermChangeHandler,
}: SearchInputProps) => {
  const [city, setCity] = useState<string>("");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(city);
  };

  return (
    <div className={classes["search-input"]}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setCity(e.target.value);
            searchTermChangeHandler(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
