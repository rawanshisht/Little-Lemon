const AvailableSlots = ({availableSlots})=>{

    return (
    <>
    <p>Available Slots</p>
    {Object.values(availableSlots).filter(t=> t.available).map(a=> (<p key={a.time}>{a.time}</p>))}
    </>);
}

export default AvailableSlots;