import React, { createContext, useContext, useState, useEffect } from 'react';
import AxiosInstance from '../config/axiosInstance';
import { useAuth } from './AuthContext';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  // Fetch tasks when user is logged in
  useEffect(() => {
    if (user) {
      fetchTasks();
    } else {
      setTasks([]);
    }
  }, [user]);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await AxiosInstance.get('/api/tasks/');
      setTasks(response.data);
    } catch (err) {
      setError('Failed to fetch tasks');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskData) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await AxiosInstance.post('/api/tasks/', taskData);
      setTasks(prevTasks => [...prevTasks, response.data]);
      return response.data;
    } catch (err) {
      setError('Failed to add task');
      console.error(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (id, taskData) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await AxiosInstance.put(`/api/tasks/${id}/`, taskData);
      setTasks(prevTasks => 
        prevTasks.map(task => task.id === id ? response.data : task)
      );
      return response.data;
    } catch (err) {
      setError('Failed to update task');
      console.error(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    try {
      setLoading(true);
      setError(null);
      
      await AxiosInstance.delete(`/api/tasks/${id}/`);
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
      return true;
    } catch (err) {
      setError('Failed to delete task');
      console.error(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <TaskContext.Provider value={{ 
      tasks, 
      loading, 
      error, 
      fetchTasks, 
      addTask, 
      updateTask, 
      deleteTask 
    }}>
      {children}
    </TaskContext.Provider>
  );
};

// Create a custom hook to use the task context
export const useTask = () => useContext(TaskContext);

// Export the provider component
export { TaskProvider };