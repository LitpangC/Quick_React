import './CourseCard.css'

const CourseCard = ({id, course, selected, toggleSelected}) => {
    return(
        <div className='card m-1 p-2' onClick={() => toggleSelected(id)}>
            <div className={`card-body ${selected.includes(id)? 'selected': ''}`}>
                <h5 className='card-title'> {course.term} CS {course.number} </h5>
                <p className='card-text'>{course.title}</p>
            </div>
            <div className='card-footer'>{course.meets}</div>
        </div>

    )
}

export default CourseCard;