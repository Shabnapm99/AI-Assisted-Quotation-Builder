import { toast } from "react-toastify";

export const validateForm = (data) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Allows global formatting formats: +123456789, 555-555-5555, (555) 555-5555
        // const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-s\.]?[0-9]{3}[-s\.]?[0-9]{4,6}$/;

        if (!data.name.trim()) {
            toast.error('Client name is required');
            return false;
        }
        if (data.name.trim().length < 2) {
            toast.error('Name must be at least 2 characters long');
            return false;
        }
        if (!data.company.trim()) {
            toast.error('Company name is required');
            return false;
        }
        if (!data.email.trim()) {
            toast.error('Email address is required');
            return false;
        }
        if (!emailRegex.test(data.email.trim())) {
            toast.error('Please enter a valid email address');
            return false;
        }
        // Phone is optional, validate only if the user typed something
        // if (data.phone.trim() && !phoneRegex.test(data.phone.trim())) {
        //     toast.error('Please enter a valid phone number format');
        //     return false;
        // }

        return true;
    };