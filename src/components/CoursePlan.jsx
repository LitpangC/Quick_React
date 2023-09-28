export const CoursePlan = ({selected}) => (
    <div className="course-plan">
        {
            selected.length === 0 ?
            <h2>The course plan is empty. 
                Select courses by click the 
                course card.</h2>
            : selected.map(x => {

                return(
                    <div key={x.id}>
                        CS {x.number}: {x.title}, {x.meets}
                    </div>
                );
            })
        }
    </div>
)