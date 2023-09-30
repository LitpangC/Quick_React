import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { CourseEditor } from '../CourseEditor';
import TermPage from './TermPage';
const CouresFormForUrl = ({courses}) => {
  const { id } = useParams();
  return <CourseEditor id={id} course={courses[id]} />;
};

const Dispatcher = ({courses}) => (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<TermPage allCourses={courses}/>}></Route>
        <Route path="/courses/:id/edit" element={<CouresFormForUrl courses={courses} />} />
    </Routes>
  </BrowserRouter>
);

export default Dispatcher;