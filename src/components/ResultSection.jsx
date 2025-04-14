import ProfileCard from './ProfileCard';
import ErrorMessage from './ErrorMessage';

export default function ResultSection({ userData, error, isLoading }) {
  return (
    <div className="flex justify-center mt-10">
      {isLoading ? (
        <p className="text-white text-xl mt-6">Carregando perfil...</p>
      ) : userData ? (
        <ProfileCard name={userData.name} description={userData.description} image={userData.image} />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : null}
    </div>
  );
}