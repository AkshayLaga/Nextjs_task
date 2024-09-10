import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem, deleteItem } from '../redux/tableSlice';
import { RootState } from '../store/Store';

const Table: React.FC = () => {
  const items = useSelector((state: RootState) => state.table.items);
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState({ id: 0, name: '', description: '' });

  const handleAdd = () => {
    dispatch(addItem(newItem));
    setNewItem({ id: 0, name: '', description: '' });
  };

  return (
    <div>
      <input
        type="text"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="text"
        value={newItem.description}
        onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
        placeholder="Description"
      />
      <button onClick={handleAdd}>Add Item</button>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
