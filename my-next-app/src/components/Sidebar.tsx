import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../redux/sidebarSlice';
import { RootState } from '../store/Store';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const isExpanded = useSelector((state: RootState) => state.sidebar.isExpanded);

  return (
    <div className="sidebar">
      <button onClick={() => dispatch(toggleSidebar())}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      {isExpanded && (
        <ul>
          <li><i className="icon"></i> Option 1</li>
          <li><i className="icon"></i> Option 2</li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
