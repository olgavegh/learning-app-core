import { CardContainer, CardLink, FilterCard } from "./CardComponents"
import Badge from "./Badge"

function FilterContainer({ currentModule, setCurrentModule }) {
    const databaseModuleFilter = [
        {
            id: 1,
            level: "all",
            backgroundColor: "rgb(253, 253, 150)",
            title: "All Module",

        },
        {
            id: 2,
            level: "progbasics",
            backgroundColor: "rgb(218, 245, 256)",
            title: "Prog Basic",

        },
        {
            id: 3,
            level: "web",
            backgroundColor: "rgb(253, 253, 256)",
            title: "Web Module",

        }
    ]




    return (
        <>
            <div className="d-flex flex-column gap-3 align-items-center justify-content-center">
                <Badge textContent={"Choose a database"} />
                <div className="d-inline-flex gap-3">
                    {databaseModuleFilter.map(card => (
                        <CardLink key={card.id} onClick={() => setCurrentModule(card.level)}>
                            <FilterCard
                                key={card.id}
                                backgroundColor={card.backgroundColor}
                                title={card.title}
                                customClass={currentModule === card.level ? "active" : "inactive"}
                            />
                        </CardLink>
                    ))}
                </div>
            </div>


        </>
    )

}

export default FilterContainer