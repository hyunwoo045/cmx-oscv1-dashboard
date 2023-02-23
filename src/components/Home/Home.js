import './Home.scss';
import CardGrid from "./CardGrid";
import {withCredentials} from "../../hocs";

const Home = () => {
    return (
        <div className={"content-wrapper"}>
            <div className={"page-title"}>Commax 운영 관제 시스템</div>
            <div align={"center"}>
                <CardGrid/>
            </div>
        </div>

    )
}

export default withCredentials(Home);
