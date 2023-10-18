import React from 'react';
import TicketsNavigation from '../../components/ticketsNav/ticketsNav.tsx';
import TicketsList from '../../components/ticketsNav/ticketsList.tsx';
import BodsList from '../../components/ticketsNav/bodsList.tsx';
import '../../components/ticketsNav/tickets.scss';
import Navigation from '../../components/navigation/navigation.tsx';




export default function Tickets() {
    const [content, setContent] = React.useState('Tickets');
    const [component, setComponent] = React.useState(<TicketsList />)

    React.useEffect(() => {
        switch (content) {
            case 'Tickets':
                setComponent(<TicketsList />)
                break;
            case 'Bods':
                setComponent(<BodsList />)
                break;
        }
    }, [content])

    return (
        <>
            <TicketsNavigation setContent={setContent} />
            {component}
            <Navigation/>
        </>
    )
}