import './CourseList.css';
import CourseCard from './CourseCard';

const CourseList = ({term, list, selected, toggleSelected, profile}) => {
    return (
        <div className='course-list'>
            {Object.entries(list).filter(([id, course]) => course.term == term).map(
                ([id,course])=> <CourseCard key={id} id={id} profile={profile} selected={selected} toggleSelected={toggleSelected} course={course}/>
                )
            }
        </div>
    );
}


export default CourseList;