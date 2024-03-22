import { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length)
        setUsers(data.users.map((user) => user.firstName));
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users &&
        users.length &&
        users.filter((user) => user.toLowerCase().includes(query));
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else setShowDropdown(false);
  };

  const handleClick = (value) => {
    setShowDropdown(false);
    setSearchParam(value);
    setFilteredUsers([]);
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="search-autocomplete-container">
      <input
        value={searchParam}
        name="search-users"
        placeholder="Search Users here..."
        onChange={handleChange}
      />

      {showDropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
};

export default SearchAutocomplete;
