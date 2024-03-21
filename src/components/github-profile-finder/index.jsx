import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import "./styles.css";

const GithubProfileFinder = () => {
  const [username, setUsername] = useState("paramattri");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchGithubUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      if (data) setUserData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setUsername("");
    }
  };

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData && <UserCard user={userData} />}
    </div>
  );
};

export default GithubProfileFinder;
