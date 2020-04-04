import Layout from '../components/Layout';

const About = () =>
(
    <Layout>
        <div>
            <center><h2>User-Location-Detector-With-Next.js</h2></center>
            
            <p>This web application was built on Next.js a React.js Framework, which retrieves user's current location and providing more details on it, including it's Internet Service Provider Details with the help of an external API <b>http://ip-api.com/json</b> which check's user exact location on page load.</p>
        </div>
    </Layout>
)

export default About;