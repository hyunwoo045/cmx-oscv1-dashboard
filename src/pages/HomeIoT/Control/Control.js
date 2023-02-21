import {Layout} from "antd";
import {HomeControl as HomeIoTControlComponent} from "../../../components";


const HomeIoTControl = () => {
    return (
        <Layout style={{minHeight: '100vh', minWidth: '85vw'}}>
            <HomeIoTControlComponent/>
        </Layout>
    )
}

export default HomeIoTControl;