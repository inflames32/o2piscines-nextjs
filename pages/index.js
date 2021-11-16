import Head from "next/head";
import useState from "react";

/* const [menuIsOpen, setMenuIsOpen] = useState(false);
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
}); */
import logosJson from "../pages/logos.json";

const logos = logosJson.logos;

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>O2 Piscines </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="bg-white shadow-lg w-full">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                {/* 	<!-- Website Logo --> */}
                <a href="#" className="flex items-center py-4 px-2">
                  <img
                    src="/1178876.png"
                    alt="o2piscines_logo"
                    className="h-8 w-8 mr-2"
                  />
                </a>
              </div>
              {/* <!-- Primary Navbar items --> */}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="/contact"
                  className="py-4 px-2 text-green-500  font-semibold hover:bg-ciment transition duration-200"
                >
                  Contacts
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 hover:bg-ciment transition duration-200"
                >
                  Mes réalisations
                </a>
                {/* <a
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  About
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Contact Us
                </a> */}
              </div>
            </div>
            {/* 	<!-- Secondary Navbar items --> */}
            {/* <div className="hidden md:flex items-center space-x-3 ">
              <a
                href=""
                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
              >
                Log In
              </a>
              <a
                href=""
                className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
              >
                Sign Up
              </a>
            </div> */}
            {/* 	<!-- Mobile menu button --> */}
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div className="hidden mobile-menu">
          <ul className="">
            <li className="active">
              <a
                href="index.html"
                className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center w-full flex-1 sm:w-11/12 md:w-5/6 text-center mt-5">
        <section className="mb-12 items-center">
          <h1 className="text-3xl font-mono mb-4">Mes services et activités</h1>
          <span className="mb-12 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            doloremque corrupti, repellat quis vitae doloribus voluptatibus
            voluptate architecto, modi quo quod voluptatem non aperiam minima,
            aut voluptatum. Iusto, nemo dolor? Dolorem quos nemo dolorum
            assumenda, vitae itaque et quibusdam. Ipsum ipsa quae blanditiis non
            dolor harum ratione, beatae iure, facere animi eligendi est
            asperiores velit qui nam? Ipsum, nostrum ex! At explicabo commodi
            natus sequi pariatur placeat atque, blanditiis ducimus nulla
            repellat nemo vel in neque accusamus dolore reprehenderit cumque
            totam dolorum, nihil odit voluptatibus, exercitationem id similique!
            Eligendi, corporis.
          </span>
        </section>

        <section className="bg-ciment">
          <h2 className="text-3xl font-mono mb-4">Mes partenaires</h2>
          <div className="flex flex-wrap items-center w-screen justify-center ">
            {logos.map((logo) => (
              <div className="w-30 h-20 bg-gray-600 m-5  shadow-xl hover:shadow-2xl  rounded-md">
                <img
                  src={logo.src}
                  alt={logo.logoName}
                  className="w-30 h-20 xl:w-50 xl:h-30"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 ...">
        <span className="my-8 mx-8">Mentions légales</span>{" "}
        <span className="my-8 mx-8">
          <a href="/contact">Contact</a>{" "}
        </span>{" "}
        <span className="my-8 mx-8">Réalisations</span>
      </footer>
    </div>
  );
}
