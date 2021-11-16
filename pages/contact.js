export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex sm:flex-row md:flex-row justify-center items-center  text-xl bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 ... w-full h-20 shadow-xl ">
        <div className="w-30 h-20 bg-gray-600 fixed ml-5 top-0 left-0">
          <img src="" alt="o2piscines_logo" className="ml-2 mr-2 " />
        </div>
        <ul className="flex sm:flex-col md:flex-row xl:flex-row">
          <li>
            <span>
              <a href="/contact">Contact</a>
            </span>
          </li>
          <li>
            <span>Réalisations</span>
          </li>
        </ul>
      </div>
      <div>
        <span>Me contacter</span>
        <span>Nom</span>
        <span>Adresse</span>
      </div>
    </div>
  );
}
