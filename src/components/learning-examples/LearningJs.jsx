import { Profiler } from "react"

const person = {
    name: 'Sasha',
    address: {
        line1: 'Baker Street',
        city: 'London',
        country: 'UK'
    },
    profiles: ['twitter','github','instagram'],
    printProfile: () =>{
        person.profiles.map(
            (profile)=>{console.log(profile)}
        )
    }
}


export default function LearningJS(){
    return(
        <>
            <div>
                Learning JS {person.name}
            </div>
            <div>{person.address.line1}</div>
            <div>{person.address.city}</div>
            <div>{person.address.country}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}