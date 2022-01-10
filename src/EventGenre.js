import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);

    const colors = ['#2196f3', '#9c27b0', '#e91e63', '#f44336', '#cddc39']

    getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        const data = genres.map((genre) => {
            const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
            return { name: genre, value: value };
            
        });
        return data;
    };

    useEffect(() => { setData(() => getData()); }, [events]);

    return (
        <ResponsiveContainer height={400} >
            <PieChart width={400} height={400}>
                <Pie
                    data={this.getData()}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={80}
                    fill='#8884d8'
                    dataKey="value"
                    label={({ name, percent }) => `$(name) ${(percent * 100).toFixed(0)}%`}
                    >    
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default EventGenre;