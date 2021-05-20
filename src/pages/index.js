import Head from "next/head";
import Header from "../components/Header/Header.component";
import Banner from "../components/Banner/Banner.component";
import ProductsFeed from "../components/ProductsFeed/ProductsFeed.component";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto bg-gray-100 z-30">
        <Banner />

        <ProductsFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(content) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
