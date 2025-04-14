import { useState } from "react";
import SearchBar from './components/SearchBar'
import Header from './components/Header'
import ResultSection from './components/ResultSection'
import ellipse1 from './assets/ellipse1.svg'
import ellipse2 from './assets/ellipse2.svg'
import memphis from './assets/memphis.svg'



function App() {
  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setUserData(inputValue); 
    console.log("Usuário pesquisado:", inputValue);
    handleSearch();
  };

  const handleSearch = async () => {
    if (!inputValue.trim()) setInputValue("");

    try {
      setError("");
      setUserData(null);
      setIsLoading(true);

      const response = await fetch(`https://api.github.com/users/${inputValue}`);

      if (!response.ok) {
        throw new Error("Nenhum perfil foi encontrado com ese nome de usuário.Tente novamente");
      }

      const data = await response.json();
      const { name:name, bio:description, avatar_url:image } = data
      setUserData({name, description, image});
      setInputValue("");
      console.log(`{name, description, image}: ${name, description, image}`)
    } catch (err) {
      setError(err.message);
      setInputValue("")
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className='relative w-full h-screen overflow-hidden flex justify-center items-center'>
        <img src={ellipse1} alt="Efeito visual"  className="absolute top-0 left-0 w-[674px] pointer-events-none select-none"/>
        <img src={memphis} alt="Efeito visual"  className="absolute top-24 left-96 translate-x-[-50%] w-[239px] h-[225px] pointer-events-none select-none"/>
        <img src={ellipse2} alt="Efeito visual"  className="absolute top-0 right-0 w-[674px] pointer-events-none select-none"/>

        <div className="z-10 bg-black min-h-[537px] w-[1156px]">
          <Header />
          <SearchBar inputValue={inputValue} setInputValue={setInputValue} onClick={handleClick} />
          <ResultSection userData={userData} error={error} isLoading={isLoading}/>
        </div>
      </div>
    </>
  )
}

export default App
