import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>O2 Piscines </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex sm:flex-row md:flex-row justify-center items-center  text-xl bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 ... w-full h-20 shadow-xl ">
        <div className="w-30 h-20 bg-gray-600 fixed ml-5 top-0 left-0">
          <img src="" alt="o2piscines_logo" className="ml-2 mr-2 sm:visible" />
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

      <main className="flex flex-col items-center justify-center w-full flex-1 sm:w-11/12 md:w-5/6 text-center mt-5">
        <h1 className="text-3xl font-mono mb-4 text-">
          Mes services et activités
        </h1>
        <span className="mb-12 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          doloremque corrupti, repellat quis vitae doloribus voluptatibus
          voluptate architecto, modi quo quod voluptatem non aperiam minima, aut
          voluptatum. Iusto, nemo dolor? Dolorem quos nemo dolorum assumenda,
          vitae itaque et quibusdam. Ipsum ipsa quae blanditiis non dolor harum
          ratione, beatae iure, facere animi eligendi est asperiores velit qui
          nam? Ipsum, nostrum ex! At explicabo commodi natus sequi pariatur
          placeat atque, blanditiis ducimus nulla repellat nemo vel in neque
          accusamus dolore reprehenderit cumque totam dolorum, nihil odit
          voluptatibus, exercitationem id similique! Eligendi, corporis.
        </span>
        <section className="bg-ciment">
          <h2 className="text-3xl font-mono mb-4">Mes partenaires</h2>
          <div className="flex flex-wrap items-center w-screen justify-center">
            <img
              src=""
              alt="partenaires_logo"
              className="w-30 h-20 bg-gray-600 m-5 shadow-2xl"
            />
            <img
              src=""
              alt="partenaires_logo"
              className="w-30 h-20 bg-gray-600 m-5 shadow-2xl"
            />
            <img
              src=""
              alt="partenaires_logo"
              className="w-30 h-20 bg-gray-600 m-5 shadow-2xl"
            />
            <img
              src=""
              alt="partenaires_logo"
              className="w-30 h-20 bg-gray-600 m-5 shadow-lg hover:shadow-2xl hover:w-40 hover:h-30 max-h-30 rounded-md"
            />
            <img
              src=""
              alt="partenaires_logo"
              className="w-30 h-20 bg-gray-600 m-5 shadow-2xl"
            />
            <img
              src=""
              alt="partenaires_logo"
              className="w-30 h-20 bg-gray-600 m-5 shadow-2xl"
            />
          </div>
        </section>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 ...">
        <span className="my-8 mx-8">Mentions légales</span>{" "}
        <span className="my-8 mx-8">
          <a href="/contact">Contact</a>{" "}
        </span>{" "}
        <span className="my-8 mx-8">Réalisations</span>
      </footer>
    </div>
  );
}
