import {Layout} from "antd";
import {WallpadLocal as WallpadLocalComponent} from "../../../components";

const Local = () => {
    return (
        <Layout style={{minHeight: '100vh', minWidth: '85vw'}}>
            <WallpadLocalComponent/>
        </Layout>
    )
}

export default Local;