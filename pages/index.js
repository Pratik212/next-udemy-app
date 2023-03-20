import React from 'react';
import EventList from "../components/events/event-list";
import {getFeatureEvents} from "../helpers/api-util";

const Home = (props) => {
    const {events} = props;
    return (
        <div>
          <EventList items={events}/>
        </div>
    );
};

export async function getStaticProps(){

    const featureEvents = await getFeatureEvents()

    return{
        props:{
            events: featureEvents
        },
        revalidate: 1800
    }
}

export default Home;