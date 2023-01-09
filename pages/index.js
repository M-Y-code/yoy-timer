import Head from "next/head";
import CountDownReg from "../components/CountDownReg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          <CountDownReg seconds={360} />
        </h1>
      </main>
    </>
  );
}
