import Head from "next/head";

//css
import reuse from "../styles/home.module.css";

//components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TrendCard } from "../components/TrendCard";

export default function Search() {
    return (
        <div className={reuse.wrapper}>

            <Head>
                <title>Search</title>
            </Head>

            <Header searchBar={true}/>

             <TrendCard />

            <Footer />
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const { 'auth-token': token } = parseCookies(ctx);
  
    if (!token || token === 'undefined') {
      destroyCookie(ctx, 'auth-token');
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
  
    return {
        props: {}
    }
  }