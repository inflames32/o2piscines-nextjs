import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>O2 Piscines</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex sm:flex-row md:flex-row justify-center items-center  text-xl bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 ... w-full h-20 ">
        <ul>
          <li className="w-600">
            <span className="ml-2 mr-2 hover:bg-green-400 hover:text-white-600">
              Logo
            </span>
          </li>
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

      <main className="flex flex-col items-center justify-center w-full flex-1 sm:w-11/12 md:w-5/6 text-center mt-20">
        <h1 className="text-3xl font-mono mb-4">Mes services et activités</h1>
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
        <h2 className="text-3xl font-mono mb-4">Mes partenaires</h2>
        <span>
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
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 ...">
        <span className="my-8 mx-8">Mentions légales</span>{" "}
        <span className="my-8 mx-8">
          <a href="/contact">Contact</a>{" "}
        </span>{" "}
        <span className="my-8 mx-8">Réalisations</span>
      </footer>
    </div>
  );
}
