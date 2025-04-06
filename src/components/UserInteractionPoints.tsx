
import React from 'react';

const UserInteractionPoints = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-3 text-logistics-primary">User Interaction Points</h3>
      <p className="text-gray-600 mb-4">
        Users maintain control over the process with several key decision points throughout the journey.
      </p>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
          <span>Initial agent installation on user's device</span>
        </li>
        <li className="flex items-start">
          <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
          <span>Product concept approval after Product Manager Agent's proposal</span>
        </li>
        <li className="flex items-start">
          <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
          <span>Quotation review after Contract Agent's negotiations</span>
        </li>
        <li className="flex items-start">
          <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
          <span>Final purchase approval before manufacturing begins</span>
        </li>
        <li className="flex items-start">
          <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
          <span>Delivery method selection and tracking</span>
        </li>
      </ul>
    </div>
  );
};

export default UserInteractionPoints;
