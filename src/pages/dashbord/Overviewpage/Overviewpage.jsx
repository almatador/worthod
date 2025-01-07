import React from 'react';

const Statistics = ({ stats }) => {
    return (
        <div className="statistics">
            {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                    <h3>{stat.title}</h3>
                    <p>{stat.value}</p>
                </div>
            ))}
        </div>
    );
};

export default Statistics;
<Statistics 
    stats={[
        { title: 'عدد المستخدمين', value: 150 },
        { title: 'عدد الرسائل', value: 40 },
        { title: 'عدد المشاريع', value: 25 },
        { title: 'الإيرادات', value: '5000$' }
    ]}
/>
