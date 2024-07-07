import { toast } from 'react-toastify';

export const notify = (message, type) => {
    toast[type](message);
}
