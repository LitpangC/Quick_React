import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { CourseEditor } from '../CourseEditor';
import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase';
import TermPage from './TermPage';
const CouresFormForUrl = ({courses}) => {
  const { id } = useParams();
  return <CourseEditor id={id} course={courses[id]} />;
};


const SignInButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signInWithGoogle}>Sign in</button>
);

const SignOutButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signOut}>Sign out</button>
);

const AuthButton = () => {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
};

const activation = ({isActive}) => isActive ? 'active' : 'inactive';


const Dispatcher = ({courses}) => (
  <BrowserRouter>
  <AuthButton />
    <Routes>
        <Route path="/" element={<TermPage className={activation} allCourses={courses}/>}></Route>
        <Route path="/courses/:id/edit" element={<CouresFormForUrl className={activation} courses={courses} />} />
    </Routes>
  </BrowserRouter>
);

export default Dispatcher;