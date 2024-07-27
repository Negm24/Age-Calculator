import React, { useState } from 'react';
import './buttonDisplays.css';
import Button from 'react-bootstrap/esm/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonIcon from '../../images/icon-arrow.svg';

const ButtonDisplays = (props) => {
    const [dayAge, setDayAge] = useState("--");
    const [monthAge, setMonthAge] = useState("--");
    const [yearAge, setYearAge] = useState("--");

    const { currentday, currentmonth, currentyear } = props;

    const ActivateButton = () => {
        setDayAge(dayAgeTemp);
        setMonthAge(monthAgeTemp);
        setYearAge(yearAgeTemp);
    };
    
    let dayAgeTemp = props.dayAge;
    let monthAgeTemp = props.monthAge;
    let yearAgeTemp = props.yearAge;

    return (
        <>
        <div id='hrButton'>
            <hr /> <Button variant='costume' id='calcButton' onClick={ActivateButton}>
            <img src={ButtonIcon} alt="Calc" />
            </Button>
        </div>

        <div className='datesContainer'>
            <span>{yearAge}</span> <main>Years</main>
        </div>

        <div className='datesContainer'>
            <span>{monthAge}</span> <main>Months</main>
        </div>

        <div className='datesContainer'>
            <span>{dayAge}</span> <main>Days</main>
        </div>
        </>
    );
};

export default ButtonDisplays;
