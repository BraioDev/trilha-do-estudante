import React, { useState } from 'react';
import '../../style.css';

const SimpleCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const renderCalendar = () => {
        const calendarCells = [];
        for (let i = 1; i <= daysInMonth + firstDayOfWeek; i++) {
            if (i <= firstDayOfWeek) {
                calendarCells.push(<div key={`empty-${i}`} className="calendar-cell empty"></div>);
            } else {
                const day = i - firstDayOfWeek;
                const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);

                let className = 'calendar-cell';
                if (selectedDate && date.toISOString().split('T')[0] === selectedDate.toISOString().split('T')[0]) {
                    className += ' selected';
                }

                calendarCells.push(
                    <div key={`day-${i}`} className={className} onClick={() => handleDateClick(date)}>
                        {day}
                    </div>
                );
            }
        }
        return calendarCells;
    };

    const handleDateClick = (date) => {
        setSelectedDate(date === selectedDate ? null : date);
    };

    return (
        <div className="simple-calendar">
            <div className="calendar-header">
                <button className='button-inerith' onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}>
                    &lt;
                </button>
                <h4>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h4>
                <button className='button-inerith' onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}>
                    &gt;
                </button>
            </div>
            <div className="calendar-grid">
                <div className="calendar-header-cell">Dom</div>
                <div className="calendar-header-cell">Seg</div>
                <div className="calendar-header-cell">Ter</div>
                <div className="calendar-header-cell">Qua</div>
                <div className="calendar-header-cell">Qui</div>
                <div className="calendar-header-cell">Sex</div>
                <div className="calendar-header-cell">Sab</div>
                {renderCalendar()}
            </div>
        </div>
    );
};

export default SimpleCalendar;