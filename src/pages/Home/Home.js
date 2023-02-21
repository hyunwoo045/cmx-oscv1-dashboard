import {Home as HomeComponent} from "../../components";
import {Layout} from "antd";

const Home = () => {
    return (
        <Layout style={{minHeight: '100vh', minWidth: '85vw'}}>
            <HomeComponent/>
        </Layout>
    )
}

export default Home;