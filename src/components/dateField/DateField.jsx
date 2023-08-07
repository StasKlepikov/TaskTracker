import style from './DateField.module.css';

import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

function DateField({ value, onChange }) {
    return (
        <DatePicker
            className={style.dateField }
            selected={value}
            dateFormat="dd/MM/yyyy"
            onChange={onChange}
            placeholderText='Select a date'
        />
    );
}

export default DateField;