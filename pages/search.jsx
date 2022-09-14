import Head from "next/head";
import Link from "next/link";

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