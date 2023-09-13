import React, { useState } from 'react';
import BookTableForm from './BookTableForm';
import Header from './Header';
import Nav from './Nav';
import AvailableSlots from './AvailableSlots';

const BookTable = () =>{
    const [formData, setFormData] = useState({
        name:'',
        date:'',
        times:[
            {time: "17:00",
            available:true},
            {time: "18:00",
            available:true},
            {time: "19:00",
            available:true},
            {time: "20:00",
            available:true},
            {time: "21:00",
            available:true}],
        guests:1,
        occasion:''
    })
    return (
        <>
        <Header/>
        <Nav/>
        <BookTableForm formData={formData} setFormData={setFormData}/>
        <AvailableSlots availableSlots = {formData.times}/>
        </>
    );
}


export default BookTable;