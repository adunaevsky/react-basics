import React, { useEffect, useState } from 'react'
import './App.css';

var myHeaders = new Headers();
myHeaders.append("apikey", "ocDt58ZiRqgaL3E575SUBJAymQKm6z51");
var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

export default function Effects() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState("");
    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(data => {
                console.log(data.data[0].first_name)
                setData(data.data[0].first_name);
            });
    }, []); //use Efffect called evry time count is updated if count is in this array.

    return (
        <div>
            <div>{data}</div>
            <div>{count}</div>
            <button onClick={() => {
                setCount(count + 1);
            }}>call API</button>
        </div>
    )
}
