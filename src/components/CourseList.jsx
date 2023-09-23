const SingleCourse = ({course}) => {
    return(<div>{course.term} CS {course.number}: {course.title}</div>)
}

const CourseList = ({list}) => {
    Object.entries(list).map(([id, course]) => {console.log(id); console.log(course)});
    return (
        <div>
            {Object.entries(list).map(([id,course])=> <SingleCourse key={id} course={course}/>)}
        </div>
    );
}


export default CourseList;