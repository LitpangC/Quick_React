import './CourseCard.css'

const CourseCard = ({course, selected, toggleSelected}) => {
    return(
        <div className='card m-1 p-2' onClick={() => toggleSelected(course)}>
            <div className={`card-body ${selected.includes(course)? 'selected': ''}`}>
                <h5 className='card-title'> {course.term} CS {course.number} </h5>
                <p className='card-text'>{course.title}</p>
            </div>
            <div className='card-footer'>{course.meets}</div>
        </div>

    )
}

export default CourseCard;