import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleTaskCompleted } from '../store/taskSlice';
import { useState } from 'react';

const TaskCard = ({
  id,
  title,
  description,
  startDate,
  endDate,
  status,
  assignee,
  priority,
}) => {
  const [complete, setComplete] = useState(false);
  const dispatch = useDispatch();

  const getDate = (dateString) => {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString();
  };

  const startDatee = getDate(startDate);
  const endDatee = getDate(endDate);

  const statusColors = {
    completed: { bg: 'bg-gradient-to-r from-green-300 to-green-200', text: 'text-green-800' },
    'in progress': { bg: 'bg-gradient-to-r from-blue-300 to-blue-200', text: 'text-blue-800' },
    pending: { bg: 'bg-gradient-to-r from-yellow-300 to-yellow-200', text: 'text-yellow-800' },
    deferred: { bg: 'bg-gradient-to-r from-gray-300 to-gray-200', text: 'text-gray-800' },
    deployed: { bg: 'bg-gradient-to-r from-purple-300 to-purple-200', text: 'text-purple-800' },
  };

  const statusStyle = statusColors[status.toLowerCase()] || { bg: 'bg-gray-100', text: 'text-gray-700' };

  const handleToggleCompleted = () => {
    dispatch(toggleTaskCompleted(id));
    setComplete(true);
  };

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shadow-lg border border-gray-200 transition-transform hover:scale-105">
      <div className={`relative ${statusStyle.bg} p-6`}>
        <div className="flex justify-between items-start">
          <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
          <span className={`text-sm font-bold rounded-full px-3 py-1 ${statusStyle.text}`}>{priority}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
      <div className="p-4">
        <div className="flex justify-between text-sm font-medium mb-3">
          <div>
            <p className="text-gray-500">Start</p>
            <p className="text-gray-700">{startDatee}</p>
          </div>
          <div>
            <p className="text-gray-500">End</p>
            <p className="text-gray-700">{endDatee}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xs text-gray-600">Girma wakeyo  Darbeto</p>
          <button
            onClick={handleToggleCompleted}
            className={`rounded-full px-4 py-2 text-xs font-semibold ${
              complete ? 'bg-green-500 text-white' : statusStyle.bg + " " + statusStyle.text
            }`}
          >
            {complete ? 'Completed' : status}
          </button>
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  assignee: PropTypes.string,
  priority: PropTypes.string,
};

export default TaskCard;