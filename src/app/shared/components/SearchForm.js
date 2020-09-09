import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(searchQuery);
  }

  const handleChange = ({ target }) => {
    setSearchQuery(target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField placeholder="Type to search ..." onChange={handleChange} value={searchQuery} />
      <Button type="submit">Search</Button>
    </form>
  );
}