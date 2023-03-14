import React from 'react';
import {getFeatureEvents} from "../dummy-data";
import EventList from "../components/events/event-list";

const Home = () => {
    const featuredEvents = getFeatureEvents()
    return (
        <div>
          <EventList items={featuredEvents}/>
        </div>
    );
};

export default Home;