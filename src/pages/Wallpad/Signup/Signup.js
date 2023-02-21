import {Layout} from "antd";
import {WallpadSignup as WallpadSignupComponent} from "../../../components";

const Signup = () => {
    return (
        <Layout style={{minHeight: '100vh', minWidth: '85vw'}}>
            <WallpadSignupComponent/>
        </Layout>
    )
}

export default Signup;