import TexInput from "../TextInput";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

const SearchBar = ({ label, onChange }) => {
  return (
    <Box className="searchBar">
      <SearchIcon />
      <TexInput label={label} name="searchInput" onChange={onChange} />
    </Box>
  );
};

export default SearchBar;
