import {Layout} from "antd";
import {WallpadPageOpen as PageOpenComponent} from "../../../components";

const PageOpen = () => {
    return (
        <Layout style={{minHeight: '100vh', minWidth: '85vw'}}>
            <PageOpenComponent/>
        </Layout>
    )
}

export default PageOpen;