import React, { useState, useEffect } from 'react'

const ContactMessages = () => {
    const [state, setState] = useState();
    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:8080/api/contact/");
            const data = await response.json();
            console.log(data);
            setState(data.data)
        })();
    }, [])
    return (
        <>
            <h3 style={{ color: '#fff' }}>Contact messages</h3>

            {state?.map(item => (<div style={{ margin: '5%' }}>
                <p style={{ color: '#fff' }} >{item.name}</p>
                <p style={{ color: '#fff' }} >{item.email}</p>
                <p style={{ color: '#fff' }} >{item.message}</p>
            </div>
            ))}

        </>
    )
}

export default ContactMessages
