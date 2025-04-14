import iconSearch from '../assets/iconSearch.svg';

export default function SearchBar({ inputValue, setInputValue, onClick }) {
  return (
    <div className='flex justify-center mt-7'>
      <div className='relative flex justify-center w-[503px] h-[62px] rounded-lg overflow-hidden'>
        <input
          type="text"
          placeholder="Digite um usuário do Github"
          className="flex-1 px-4 bg-white outline-none max-w-[503px] rounded-lg font-semibold text-black text-xl placeholder:text-black placeholder:text-xl"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={onClick} className="absolute right-0 bg-blue-600 hover:bg-blue-700 w-[62px] h-[62px] flex items-center justify-center rounded-lg">
          <img src={iconSearch} alt="Buscar" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}