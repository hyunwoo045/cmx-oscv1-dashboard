import cardContents from "./card.contents";
import {Card} from "antd";

const CardGrid = () => {

    return (<div align={"center"}>
        {cardContents.map(row => (
            <div style={{maxWidth: '70vw', minWidth: '500px'}} align={"left"} key={row.key}>
                <Card title={row.title}>
                    {row.grids.map(col => (
                        <Card.Grid onClick={() => {}} key={col.key}>{col.label}</Card.Grid>
                    ))}
                </Card>
            </div>
        ))}
    </div>)
}

export default CardGrid;