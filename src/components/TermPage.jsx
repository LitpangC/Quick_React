import TermSelector from "./TermSelector";
import CourseList from "./CourseList";
import { useState } from "react";
const TermPage = ({allCourses}) => {
    const [term, changeTerm] = useState("Fall");
    const [selected, setSelected] = useState([]);
    const toggleSelected = (item) => setSelected(
        selected.includes(item)?
        selected.filter(x => x !== item): [...selected, item]
    );
    return(
        <div>
            <TermSelector term={term} changeTerm={changeTerm}></TermSelector>
            <CourseList term={term} list={allCourses} selected={selected} toggleSelected={toggleSelected}/>
        </div>
    );
}
export default TermPage;