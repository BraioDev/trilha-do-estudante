import React, { useState, useEffect } from 'react';
import '../../style.css';

const SimpleCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [randomColors, setRandomColors] = useState({});

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    useEffect(() => {
        // Gerar cores aleatórias para alguns dias ao iniciar o componente
        const initialRandomColors = {};
        const randomCells = Array.from({ length: 5 }, () => Math.floor(Math.random() * daysInMonth));
        randomCells.forEach((day) => {
            initialRandomColors[day] = getRandomColor();
        });
        setRandomColors(initialRandomColors);
    }, [daysInMonth]);

    const canGoToNextMonth = () => {
        const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        const today = new Date();
        return nextMonth <= today;
    };

    const renderCalendar = () => {
        const calendarCells = [];
        for (let i = 1; i <= daysInMonth + firstDayOfWeek; i++) {
            if (i <= firstDayOfWeek) {
                calendarCells.push(<div key={`empty-${i}`} className="calendar-cell empty"></div>);
            } else {
                const day = i - firstDayOfWeek;
                const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);

                const backgroundColor = randomColors[date.getDate()] || '';
                const cellStyle = {
                    background: backgroundColor,
                    color: backgroundColor ? 'white' : 'black', // Define a cor do texto como branca se houver um background color
                };

                calendarCells.push(
                    <div
                        key={`day-${i}`}
                        className="calendar-cell"
                        style={cellStyle}
                        onClick={() => handleDateClick(date)}
                    >
                        {day}
                    </div>
                );
            }
        }
        return calendarCells;
    };

    const handleDateClick = (date) => {
        if (!selectedDate || date.toISOString().split('T')[0] !== selectedDate.toISOString().split('T')[0]) {
            // Verificar se a cor atual é aleatória
            if (randomColors[date.getDate()]) {
                // Se a cor atual for aleatória, definir a cor como vazia (sem cor de fundo)
                setRandomColors({
                    ...randomColors,
                    [date.getDate()]: '',
                });
            } else {
                // Se a cor atual não for aleatória, gerar uma nova cor aleatória
                const backgroundColor = getRandomColor();
                setRandomColors({
                    ...randomColors,
                    [date.getDate()]: backgroundColor,
                });
            }
        }

        setSelectedDate(date === selectedDate ? null : date);
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div className="simple-calendar">
            <div className="calendar-header">
                <button className='botao button-dark ' onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}>
                    &lt;
                </button>
                <h4>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h4>
                <button className='botao button-dark  ' onClick={() => canGoToNextMonth() && setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}>
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
