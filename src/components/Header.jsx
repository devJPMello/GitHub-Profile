import iconGit from '../../public/iconGitHub.svg';
import logoGit from '../../public/logoGitHub.svg';

export default function Header() {
  return (
    <div className='z-10 flex justify-center gap-3 mt-10'>
      <img src={iconGit} alt="Icons Git Hub" />
      <h1 className="text-6xl text-center text-white font-semibold font-nunito">Perfil</h1>
      <img src={logoGit} alt="Icons Git Hub" />
    </div>
  );
}