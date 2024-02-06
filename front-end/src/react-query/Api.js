
import { useMutation, useQuery } from 'react-query';
import Axios from '../config/Axios'

export const addTask = async (data) => {
    return await Axios.post("/api/add-task", { ...data });
  };
  
  export const useAddTask = () => {
    return useMutation({
      mutationFn: (resData) => addTask(resData),
    });
  };
  
  export const addCard = async (data) => {
    return await Axios.post("/api/add-task-card", { ...data });
  };
  
  export const useAddCard = () => {
    return useMutation({
      mutationFn: (resData) => addCard(resData),
    });
  };

  export const taskList = async (params = {}) => {
    return await Axios.get(`/api/task-list`); 
  };
  
  export const useTaskList = (params) => {
    return useQuery(["taskList", params], () => taskList(params));
  };
  
  export const taskDetail = async (params = {}) => {
    return await Axios.get(`/api/task-detail/`, { params });
  };
  
  export const useTaskDetail = (params) => {
    return useQuery(["formData", params], () => taskDetail(params));
  };
  