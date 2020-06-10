import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const getClockTime = (time) => {
    const clock = {
        secs: '0',
        blockHours: '0000',
        hours: '0000',
        blockMins: '00000000000',
        mins: '0000',
    };

    if (typeof time === 'string') {
        const [
            hr,
            min,
            sec,
        ] = time.split(':');

        const seconds = parseInt(sec);
        const hours = parseInt(hr);

        if (
            typeof seconds === 'number' &&
            !isNaN(seconds) &&
            ((seconds === 0) || !(seconds % 2))
        ) {
            clock.secs = 'Y';
        }

        if (
            typeof hours === 'number' &&
            !isNaN(hours)
        ) {
            const blockHours = parseInt(hours / 5);
            const individualHours = hours % 5;
            const splitBlockHours = clock.blockHours.split('');
            const splitHours = clock.hours.split('');
            for (let i = 0; i < splitBlockHours.length; i++) {
                if (i < blockHours) {
                    splitBlockHours[i] = 'R';
                }
            }
            for (let i = 0; i < splitHours.length; i++) {
                if (i < individualHours) {
                    splitHours[i] = 'R';
                }
            }
            clock.blockHours = splitBlockHours.join('');
            clock.hours = splitHours.join('');
        }
    }

    return `${clock.secs} ${clock.blockHours} ${clock.hours} ${clock.blockMins} ${clock.mins}`;
};

function App() {
    const [
        value,
        setValue,
    ] = useState('00:00:00');

    // TODO: create UI representation of clock
    return (
        <div className="App">
            <input
                type="text"
                value={ value }
                onChange={ (e) => { setValue(e.target.value); } } />
            <div>{ getClockTime(value) }</div>
        </div>
    );
}

export default App;
export {
    myFunc,
};