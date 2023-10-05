import './CourseCard.css'
import { isConflict } from '../utilities/conflict';
import { Link } from 'react-router-dom';
const CourseCard = ({course, id, profile, selected, toggleSelected}) => {
    return(
        <div className='card m-1 p-2' onClick={isConflict(course, selected)? null : () => toggleSelected(course)}>
            <div className={`card-body 
                ${selected.includes(course)? 'selected': isConflict(course, selected)? 'unselectable': ''}`}>
                <h5 className='card-title'> {course.term} CS {course.number} </h5>
                <p className='card-text'>{course.title}</p>
            </div>
            <div className="card-body">
                {profile?.isAdmin && <Link to={`/courses/${id}/edit`}>edit</Link>}
            </div>
            <div className='card-footer'>{course.meets}</div>
        </div>

    )
}

export default CourseCard;