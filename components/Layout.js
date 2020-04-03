import Head from "next/head";
import Navbar from './Navbar';

const Layout = (props) =>
(
    <div>
        <Head>
            <title>Location Detector</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
        </Head>

        <Navbar/>

        <div class="container">
            {props.children}
        </div>
    </div>
)

export default Layout