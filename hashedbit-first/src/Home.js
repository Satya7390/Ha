import React from "react";

const Home = () => {
    let name = 'Satya';
    let sub = ['Physics','Chemistry','Math','Biology','English'];
    let table =['Name','Course','Branch','Year','Semester'];
    //let tname=['Satya','Rahul','Ram','Shyam','Mohan'];
    let tvalue=[
        {
            name:'Satya',
            course:'B.Tech',
            branch:'I.T',
            yr:'3rd',
            sem:'5th'
        },
        {
            name:'Satya',
            course:'B.Tech',
            branch:'I.T',
            yr:'3rd',
            sem:'5th'
        },
        {
            name:'Satya',
            course:'B.Tech',
            branch:'I.T',
            yr:'3rd',
            sem:'5th'
        },
        {
            name:'Satya',
            course:'B.Tech',
            branch:'I.T',
            yr:'3rd',
            sem:'5th'
        },
        {
            name:'Satya',
            course:'B.Tech',
            branch:'I.T',
            yr:'3rd',
            sem:'5th'
        }
    ]
    return(
        <div>
            <h1 style={{color:'#5b156c'}}>Hii Everyone !!</h1>
            <p>{name} is here.</p>
            <ul>
                {
                    sub.map((item)=>(
                        <li>{item}</li>
                    ))
                }
            </ul>
            <table style={{backgroundColor:'aqua'}}>
                
                {
                    table.map((item)=>(
                        <th style={{color:'red'}}>{item}</th>
                    ))
                   
                }
                
                
                {
                     tvalue.map((item)=>(
                        <tr>
                        <td>{item.name}</td>
                         <td>{item.course}</td>
                         <td>{item.branch}</td>
                         <td>{item.yr}</td>
                         <td>{item.sem}</td>
                        </tr>
                    ))

                }
                
                
            </table>
        </div>
    )
   
}

export default Home;

