import './CourseList.css';
import CourseCard from './CourseCard';

const CourseList = ({term, list, selected, toggleSelected}) => {
    return (
        <div className='course-list'>
            {Object.entries(list).filter(([id, course]) => course.term == term).map(
                ([id,course])=> <CourseCard key={id} selected={selected} toggleSelected={toggleSelected} course={course}/>
                )
            }
        </div>
    );
}


export default CourseList;