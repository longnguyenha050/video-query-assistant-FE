import { Input } from "antd";
const SearchBar = () => {
  return (
    <>
      <Input.Search placeholder="Input text" enterButton="Search" loading />
    </>
  );
};

export default SearchBar;
