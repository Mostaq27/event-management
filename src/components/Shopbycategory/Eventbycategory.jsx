
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCart from './CategoryCart';
import { Row } from 'react-bootstrap';

const Eventbycategory = () => {

    const [data, setData] = useState([])

    const handleTabClick = (data) => {
        const url = `/events.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    };

    useEffect(() => {
        handleTabClick('events')
    }, ['wedding'])



    const tabs = [
        { title: 'Events', data: 'Events' },

    ];

    return (
        <div className='container'>
            <h1 className='text-center my-5'
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="500">Our services</h1>
            <Tabs>
                <TabList>
                    {
                        tabs.map((tab, idx) => <Tab key={idx} onClick={() => handleTabClick(tab.data)}>{tab.title}</Tab>)
                    }
                </TabList>

                {tabs.map(idx => (
                    <TabPanel key={idx}>
                        <Row xs={1} md={3} className="g-4">
                            {
                                data.map(events => <CategoryCart key={events._id} cars={events}></CategoryCart>)
                            }
                        </Row>
                    </TabPanel>
                ))}

            </Tabs>
        </div>
    );
};

export default Eventbycategory;