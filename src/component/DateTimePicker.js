import React, { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

function DateTimePicker({ label,onChange }) {
  const inputRef = useRef(null);

  useEffect(() => {
    // initialize flatpickr on the input
    const fp = flatpickr(inputRef.current, {
      dateFormat: "Y-m-d h:i K",
      minDate: "today",
      enableTime: true,
      time_24hr: false,
      onChange: (selectedDates, dateStr) => {
        onChange(dateStr);
      },
    });

    return () => {
      fp.destroy(); // cleanup when component unmounts
    };
  }, []);

  return (
    <div className="p-4">
          <h5 className="text-sm font-bold mb-2">{ label}</h5>
      <input
        ref={inputRef}
        type="text"
        className="border rounded-md p-2"
        placeholder="Select date and time"
      />
    </div>
  );
}

export default DateTimePicker;
