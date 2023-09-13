import React, { useState } from 'react';

function BookTableForm({formData, setFormData}) {

    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        if(name === "time"){
            // updateTime(e.target.value);
            const updatedTimes = formData.times.map((timeObj) => {
                if (timeObj.time === e.target.value) {
                  // Update the available property for the selected time
                  return { ...timeObj, available: false }; // You can set it to false or change it according to your logic
                }
                return timeObj; // For other times, just return them as they are
              });
              setFormData({
                ...formData,
                times: updatedTimes,
              });
        }
        else{
            setFormData({ ...formData, [name]: value });
        }
}
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Reservation Successful!")
    }
    return (
        <>
        <form id="form" onSubmit={handleSubmit}>
            <label htmlFor="res-name">Name</label>
            <input type="text" id="res-name" name="name" value={formData.name} onChange={handleInputChange}/>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" name="date" value={formData.date} onChange={handleInputChange}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="time" value={formData.time} onChange={handleInputChange}>
                <option value="" default>Select an option</option>
                {Object.values(formData.times).filter(t => t.available).map((option, index)=>(
                    <option key={index} value={option.time}>{option.time}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={formData.guests} onChange={handleInputChange}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={formData.occasion} onChange={handleInputChange}>
                 <option value="" default>Select an option</option>
                 <option>Birthday</option>
                 <option>Anniversary</option>
            </select>
            <button type="submit">Make Your reservation</button>
        </form>
        </>
    );
}


export default BookTableForm;