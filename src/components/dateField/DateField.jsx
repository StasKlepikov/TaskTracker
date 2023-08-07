import './DateField.css';

import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

function DateField({ value, onChange }) {
    return (
        <DatePicker
            className='date-field'
            selected={value}
            dateFormat="dd/MM/yyyy"
            onChange={onChange}
            placeholderText='Select a date'
        />
    );
}

export default DateField;