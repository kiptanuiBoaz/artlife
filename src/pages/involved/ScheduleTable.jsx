import { useState } from "react";
const ScheduleTable = ({  onChange }) => {
    const [localSchedule, setLocalSchedule] = useState({
        Mon: {
            Morning: false,
            Afternoon: false,
            Evening: false,
        },
        Tue: {
            Morning: false,
            Afternoon: false,
            Evening: false,
        },
        Wed: {
            Morning: false,
            Afternoon: false,
            Evening: false,
        },
        Thu: {
            Morning: false,
            Afternoon: false,
            Evening: false,
        },
        Fri: {
            Morning: false,
            Afternoon: false,
            Evening: false,
        },
    });

    const handleInputChange = (event) => {
        const { day, time } = event.target.dataset;
        const isChecked = event.target.checked;
        const newValue = { ...localSchedule, [day]: { ...localSchedule[day], [time]: isChecked } };
        setLocalSchedule(newValue); 
        onChange(newValue);
    };

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    const times = ["Morning", "Afternoon", "Evening"];

    return (
      <table className="table-fixed max-w-sm mx-auto md:max-w-md">
        <thead>
          <tr>
            <th className=""></th>
            {days.map((day) => (
              <th key={day} className="w-1/6 text-center font-medium">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time) => (
            <tr key={time}>
              <td className="w-1/6 text-right font-medium">{time}</td>
              {days.map((day) => (
                <td key={`${day}-${time}`} className=" text-center">
                  <label
                    htmlFor={`${day}-${time}`}
                    className="inline-flex items-center"
                  >
                    <input
                      id={`${day}-${time}`}
                      type="checkbox"
                      data-day={day}
                      value={localSchedule[day][time]}
                      data-time={time}
                      checked={localSchedule[day][time]}
                      onChange={handleInputChange}
                      className="sr-only "
                    />
                    <div
                      className={`${
                        localSchedule[day][time]
                          ? "bg-primary_green"
                          : "bg-gray-200"
                      } w-8 h-8 border-2 rounded`}
                    ></div>
                  </label>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
}


export default ScheduleTable;