import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({events}) => {
    const [data, setData] = useState([]);

    useEffect(() => { setData(() => getData()); }, [events]);


    const getData = () => {
      const genres = [
        'React', 
        'Javascript', 
        'Node', 
        'jQuery', 
        'AngularJS',
        'Angular',
      ];

      const data = genres.reduce(
        (accumalator, genre) => {
          const value = events.filter(({ summary }) =>
             summary.split(' ').includes(genre)
           ).length;

           if(value !== 0) {
              accumalator.push({ name: genre, value: value })
           }

           return accumalator;
        },
        []
      );

      return data;
    };

    // const getData = () => {
    //     const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    //     const data = genres.map((genre) => {
    //       const value = events.filter(({ summary }) =>
    //         summary.split(' ').includes(genre)
    //       ).length;
    //       return { name: genre, value: value };
    //     })
    //     .filter(({ value }) => {
    //       return value !== 0
    //     });
    //     return data;
    //   };

    return (
        <ResponsiveContainer height={400} >
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={80}
                    fill='#8884d8'
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >    
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default EventGenre;