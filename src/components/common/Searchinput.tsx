const Searchinput = () => {
  return (
    <div className="relative w-72 ">
      <input
        className="border p-4 w-72 rounded-lg"
        type="text"
        name="search"
        id=""
        placeholder="Search blogs"
      />
      <button className="absolute top-4 right-2">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/search-icon.svg"}
          alt=""
        />
      </button>
    </div>
  );
};

export default Searchinput;
