import React, { useEffect, useState, useMemo } from 'react'
import './App.css';

var myHeaders = new Headers();
myHeaders.append("apikey", "ocDt58ZiRqgaL3E575SUBJAymQKm6z51");
var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

export default function Memo() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
                console.log(data.data[0].first_name)
                setData(data.data);
            });
    }, []); //use Efffect called evry time count is updated if count is in this array.


    function findLongestName(d) {

        if (!d) return null;

        let longestName = "";
        d.forEach((c) => {
            let currentName = c.first_name;
            if (currentName.length > longestName.length) {
                longestName = currentName
            }
        });
        console.log('longestName was computed!');
        return longestName;
    }

    const getLongestName = useMemo(() => findLongestName(data), [data]);

    return (
        <div>
            <div>{getLongestName}</div>
            <div>{count}</div>
            <button onClick={() => {
                setCount(count + 1);
            }}>call API</button>
        </div>
    )
}
