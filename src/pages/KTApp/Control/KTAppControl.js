import {Layout} from "antd";
import {KTAppControl as KTControlComponent} from "../../../components";

const KTAppControl = () => {
    return (
        <Layout style={{minHeight: '100vh', minWidth: '85vw'}}>
            <KTControlComponent/>
        </Layout>
    )
}

export default KTAppControl;