import FilterProvider from "../ChildComponents/filters/FilterProvider";
import Filter from "./ChildComponents/Filter";

interface IBaseFilter {
    name: string;
}

type IFilterData = Record<string, IBaseFilter>;

function TransactionsPage() {
    function handleFilterChange(filter_data: IFilterData) {
        console.log(filter_data);
    }

    return (
        <div>
            <FilterProvider onChange={handleFilterChange}>
                <Filter />
            </FilterProvider>
        </div>
    )
}