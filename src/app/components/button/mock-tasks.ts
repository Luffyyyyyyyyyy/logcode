import{Task} from './Task';

// export const TASKS = [
export const TASKS: Task[] = [
// here we are using array so we use Task[] this ,if we use an object then we use only Task
    {
        id: 1,
        text: 'Doctors appointment',
        day: '10th May, 2:30PM',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: '15th May, 4:30PM',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shoping',
        day: '20th May, 7:30PM',
        reminder: true
    }
]