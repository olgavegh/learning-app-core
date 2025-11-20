import { CardContainer, CardLink, FilterCard } from "./CardComponents"
import Badge from "./ui/Badge"
import { getModules } from "../constants/navigationData"
import SearchInput from "./ui/SearchInput"

function FilterContainer({ currentModule, setCurrentModule, isSearchBar = false, searchTerm, setSearchTerm }) {

    return (
        <>
            <div className="d-flex flex-column gap-4 align-items-center justify-content-center">
                <Badge textContent={"Choose a database"} />
                <div className="d-flex flex-column gap-3">
                    <div className="d-flex flex-column flex-sm-row gap-3">
                        {getModules(currentModule).map(card => (
                            <CardLink key={card.id} onClick={() => setCurrentModule(card.level)}>
                                <FilterCard
                                    key={card.id}
                                    backgroundColor={card.backgroundColor}
                                    title={card.title}
                                    customClass={"filter-card" + (currentModule === card.level ? " active" : " inactive")}
                                />
                            </CardLink>
                        ))}
                    </div>
                    {isSearchBar && <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
                </div>

            </div>


        </>
    )

}

export default FilterContainer