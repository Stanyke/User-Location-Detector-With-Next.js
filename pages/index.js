import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const Index = (props) =>
(
    <Layout>
        <div>
            <center><h2>Location Detector With Next.js</h2></center>
            <div class="list-group">
                <a class="list-group-item list-group-item-action flex-column align-items-start active">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Country: {props.countryDetails.country}</h5>
                    <small>{props.countryDetails.countryCode}</small>
                    </div>
                    <p class="mb-1">Internet Service Provider: {props.countryDetails.isp}</p>
                    <small>TimeZone: {props.countryDetails.timezone}</small>
                </a>
            </div>
            {props.countryCd}
        </div>
    </Layout>
);

Index.getInitialProps = async () =>
{
    const res = await Fetch('http://ip-api.com/json');

    const data = await res.json();

    return {
        countryDetails: data
    };
} 

export default Index;