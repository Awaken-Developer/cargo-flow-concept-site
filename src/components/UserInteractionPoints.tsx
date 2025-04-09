
import React from 'react';
import { UserCheck } from 'lucide-react';

const UserInteractionPoints = () => {
  const interactionPoints = [
    "Initial agent installation on user's device",
    "Product concept approval after Product Manager Agent's proposal",
    "Quotation review after Contract Agent's negotiations",
    "Final purchase approval before manufacturing begins",
    "Delivery method selection and tracking"
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-logistics-primary">User Interaction Points</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Users maintain control over the process with several key decision points throughout the journey.
      </p>
      <ul className="space-y-4 text-gray-600">
        {interactionPoints.map((point, index) => (
          <li key={index} className="flex items-start group">
            <div className="flex-shrink-0 h-6 mr-3 text-logistics-accent mt-0.5">
              <UserCheck size={18} className="group-hover:text-logistics-primary transition-colors" />
            </div>
            <span className="leading-relaxed group-hover:text-logistics-primary transition-colors">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInteractionPoints;
