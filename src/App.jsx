import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import CourseList from './components/CourseList';
import Banner from './components/Banner';
import { useJsonQuery } from './utilities/fetch';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TermPage from './components/TermPage';
import Dispatcher from './components/Dispatcher';
import { useDbData } from './utilities/firebase';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const Main = () => {
  const [data, error] = useDbData("/");

  if (error) return <h1>Error loading data: {`${error}`}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  return (
    <div>
      <Banner title={data.title}></Banner>
      <Dispatcher courses={data.courses}/>
    </div>
  );
}

const App = () => {
  const queryClient = new QueryClient();
  return(
    <QueryClientProvider client={queryClient}>
      <div className='container'>
        <Main/>
      </div>
    </QueryClientProvider>
  )
};

export default App;