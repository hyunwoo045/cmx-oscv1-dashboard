import {Layout} from "antd";
import {KTAppPublic as KTPublicComponent} from "../../../components";

const KTAppPublic = () => {
    return (
        <Layout style={{minHeight: '100vh', minWidth: '85vw'}}>
            <KTPublicComponent/>
        </Layout>
    )
}

export default KTAppPublic;