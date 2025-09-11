import { Outlet } from 'react-router';
import EventsNavigation from '../components/EventsNavigation'

export default function EventLayout() {
    return (
        <>
        <EventsNavigation/>
        <main>
            <Outlet/>
        </main>
        </>
    )
}