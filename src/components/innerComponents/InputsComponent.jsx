import React, { useState } from 'react';
import './inputsComponent.css';
import ButtonDisplays from './ButtonDisplays';

const InputsComponent = () =>{
    // Get Current Date:
        const currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth() + 1;
        var currentDay = currentDate.getDate();
    
    var [birthDay, setbirthDay] = useState('');
    var [birthMonth, setBirthmonth] = useState('');
    var [birthYear, setBirthYear] = useState('');

    const handlebirthDayChange = (e) => {
        setbirthDay(e.target.value);
    }

    const handlebirthMonthChange = (e) => {
        setBirthmonth(e.target.value);
    }

    const handlebirthYearChange = (e) => {
        setBirthYear(e.target.value);
    }

    if(birthMonth > currentMonth || birthMonth == currentMonth){
        currentMonth += 12;
        currentYear--;
    }

    if(birthDay > currentDay || birthDay == currentDay){
        currentDay += 31;
        currentMonth--;
    }

    const cD = currentDay;
    const cM = currentMonth;
    const cY = currentYear;

    const dayAge = currentDay - birthDay;
    const monthAge = currentMonth - birthMonth;
    const yearAge = currentYear - birthYear;

    return (
        <>
            <div id='inputsFlex'>
                <div className="inputs">
                    <legend>DAY</legend>
                    <input type="number" placeholder='DD' value={birthDay} onChange={handlebirthDayChange} required />
                </div>

                <div className="inputs">
                    <legend>MONTHS</legend>
                    <input type="number"placeholder='MM' value={birthMonth} onChange={handlebirthMonthChange} required />
                </div>

                <div className="inputs">
                    <legend>YEAR</legend>
                    <input type="number" placeholder='YYYY' value={birthYear} onChange={handlebirthYearChange} required />
                </div>
            </div>

            <div>
                <ButtonDisplays dayAge={dayAge} monthAge={monthAge} yearAge={yearAge} currentDay={cD} currentMonth={cM} currentYear={cY} />
            </div>
        </>
    );
}

export default InputsComponent;
