import React from 'react';
import { Link } from 'react-router-dom';

interface CourseCardInterface {
    category: string;
    image: string;
    description: string;
    enrollmentLink: string;
}
  
const CourseCard: React.FC<CourseCardInterface> = ({ category, image, description, enrollmentLink }) => (
    <div className="bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
        <img src={image} alt={category} className="w-full h-48 object-cover mb-4 rounded-md shadow-md" />
        <div className="m-6">
            <h3 className="text-2xl font-semibold text-lemon mb-2">{category}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <Link to={enrollmentLink} className="p-2 border border-orange-500 text-orange-500">Enroll Now</Link>
        </div>
        
    </div>
);
  
  export default CourseCard;
