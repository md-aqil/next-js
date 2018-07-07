
import Head from 'next/head';

import Navbar from './Navbar';



const Layout = (props) => (

    <div>
        <Head>
            <link rel="stylesheet" href="https://bootswatch.com/4/sketchy/bootstrap.min.css" />
            <link rel="stylesheet" href="../assets/main.css" />

            <title>hello next app</title>
        </Head>
        <Navbar />

            <div className="container">
                {props.children}
            </div>
    </div>

);

export default Layout;