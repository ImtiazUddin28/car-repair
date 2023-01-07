import React, { useEffect, useState } from 'react';
import TeamMember from './TeamMember';

const Team = () => {
	const [members, setMembers] = useState([]);
    
    useEffect( () =>{
        fetch('members.json')
        .then(res =>res.json())
        .then(data => setMembers(data))
    }, []);
    return (

		<div>
            <div className='text-center m-12'>
                
                <h2 className="text-5xl font-bold text-orange-600">Meet Our Team</h2>
                <p className='m-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    members.map(member => <TeamMember
                        key={member._id}
                        member={member}
                    ></TeamMember>)
                }
            </div>
        </div>
        

	)
};

export default Team;