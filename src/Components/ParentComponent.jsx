import React, { useState } from 'react';
import Card from './Card';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ParentComponent = () => {
  const [likedCourses, setLikedCourses] = useState([]);

  const course = {
    id: 1,
    title: 'Course Title',
    description: 'Course Description',
    image: { url: 'course-image-url' },
  };

  return (
    <div>
      <Card 
        course={course} 
        likedCourses={likedCourses} 
        setLikedCourses={setLikedCourses} 
      />
      <ToastContainer />
    </div>
  );
};

export default ParentComponent;
