import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { CourseEditor } from '../CourseEditor';
import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase';
import { useProfile } from '../utilities/profile';
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


const Dispatcher = ({courses}) => {
  const [profile, profileLoading, profileError] = useProfile();

  if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
  if (profileLoading) return <h1>Loading user profile</h1>;
  if (!profile) return <h1>No profile data</h1>;
  return(
  <BrowserRouter>
  <AuthButton />
    <Routes>
        <Route path="/" element={<TermPage className={activation} profile={profile} allCourses={courses}/>}></Route>
        <Route path="/courses/:id/edit" element={<CouresFormForUrl className={activation} profile={profile} courses={courses} />} />
    </Routes>
  </BrowserRouter>
)};

export default Dispatcher;