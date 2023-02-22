import {Space} from "antd";
import {Content} from "antd/es/layout/layout";
import './Home.scss';
import {PageHeader} from "@ant-design/pro-layout";
import CardGrid from "./CardGrid";
import {withCredentials} from "../../hocs";

const Home = () => {
    return (
        <Content style={{margin: '0px 0px', padding: 20, minHeight: "100vh"}} align={"leftcenter"}>
            <Space>
                <PageHeader style={{fontWeight: 100}}
                            title={"COMMAX 홈 화면"}>
                </PageHeader>
            </Space>
            <div align={"center"}>
                <CardGrid/>
            </div>
        </Content>
    )
}

export default withCredentials(Home);
