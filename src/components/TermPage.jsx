import TermSelector from "./TermSelector";
import CourseList from "./CourseList";
import { useState } from "react";
import { Modal } from "./Modal";
import { CoursePlan } from "./CoursePlan";
const TermPage = ({profile, allCourses}) => {
    const [term, changeTerm] = useState("Fall");
    const [selected, setSelected] = useState([]);
    const toggleSelected = (item) => setSelected(
        selected.includes(item)?
        selected.filter(x => x !== item): [...selected, item]
    );
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    return(
        <div>
            <button className="btn btn-outline-dark" onClick={openModal}>
                <i className="bi bi-cart4">Course Plan</i></button>
            <Modal open={open} close={closeModal}>
                <CoursePlan selected={selected}/>
            </Modal>
            <TermSelector term={term} changeTerm={changeTerm}></TermSelector>
            <CourseList 
                term={term} list={allCourses} profile={profile}
                selected={selected} toggleSelected={toggleSelected}/>
        </div>
    );
}
export default TermPage;