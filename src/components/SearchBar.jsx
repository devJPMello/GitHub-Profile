import iconSearch from '../assets/iconSearch.svg';

export default function SearchBar({ inputValue, setInputValue, onClick }) {
  return (
    <div className="flex justify-center mt-7">
      <div className="flex w-[503px] h-[62px] items-center bg-white border border-[#D1D5DB] rounded-lg pl-4">
        <input
          type="text"
          placeholder="Digite um usuário do Github"
          className="flex-1 text-black text-xl font-medium placeholder:text-black placeholder:text-xl bg-transparent outline-none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="ml-[-10px]"> {/* esse truque visual cola o botão no input */}
          <button
            onClick={onClick}
            className="w-[62px] h-[62px] flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md"
          >
            <img src={iconSearch} alt="Buscar" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
