const Header = () => {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">

      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Profile
        </button>
      </div>

    </header>
  );
};

export default Header;