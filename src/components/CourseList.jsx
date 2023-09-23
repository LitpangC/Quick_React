import './CourseList.css';
import CourseCard from './CourseCard';

const CourseList = ({list}) => {
    return (
        <div className='course-list'>
            {Object.entries(list).map(([id,course])=> <CourseCard key={id} course={course}/>)}
        </div>
    );
}


export default CourseList;