import {Admin as AdminComponent} from "../../components";
import {Layout} from "antd";

const Admin = () => {

    return (
        <Layout style={{minHeight: '100vh', minWidth: '85vw'}}>
            <AdminComponent/>
        </Layout>
    )
}

export default Admin;