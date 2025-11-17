import { CardContent, CardLink, CardContainer } from "../components/CardComponents"
import Badge from "../components/Badge"
import TitleContainer from '../components/TitleContainer';
import { getDashboardCards } from "../constants/navigationData";
import { Link } from "react-router-dom"

function DashBoard() {


    return (
        <div className="d-flex flex-column">

            <TitleContainer
                badgeText="Practice for PA"
                titleText="Ready to ace your assessment?"
                descText="Master 161 questions with fun, stress-free learning modes"
            />

            <div className="d-flex flex-column gap-3 align-items-center justify-content-center">
                <Badge textContent={"Choose a mode"} />
                <CardContainer>
                    {getDashboardCards().map(card => (
                        <CardLink key={card.id} to={`/${card.page}`}>
                            <CardContent
                                key={card.id}
                                backgroundColor={card.backgroundColor}
                                title={card.title}
                                description={card.description}
                            />
                        </CardLink>
                    ))}
                </CardContainer>
            </div>

        </div >
    )
}
export default DashBoard;

