

export const CalendarEvent = ({ event }) => {

    const { title , user } = event;
    
    console.log(event);
    console.log(title);
    console.log(user.name);
  
    return (
    <>
        <strong>{ title }</strong>
        <span> - { user.name }</span>
    </>
  )
}
