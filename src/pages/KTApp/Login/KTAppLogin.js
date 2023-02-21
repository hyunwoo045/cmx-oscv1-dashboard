import {Layout} from "antd";
import {KTAppLogin as KTLoginComponent,} from "../../../components";

const KTAppLogin = () => {
    return (
        <Layout style={{minHeight: '100vh', minWidth: '85vw'}}>
            <KTLoginComponent/>
        </Layout>
    )
}

export default KTAppLogin;