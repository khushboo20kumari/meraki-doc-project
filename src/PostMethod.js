// import { type } from "@testing-library/user-event/dist/type";

// function PostMethod(){
//     fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357&",{
//        method:"POST",

//        headers:{
//         Accept:"application\json",
//         Content-type:"applicaton\json",
//        }

//     })
//     return(
//         <>

//         </>
//     )
// }
// export default PostMethod;


import React from "react";

import { useState, useEffect } from "react";

const OurPartner = () => {
    const [partner, setPartner] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://navgurukul.github.io/tarabai-shinde/data/meraki_partners.json"
            )
            .then((response) => {
                setPartner(response.data);
            });
    }, []);

    return (
        <>

            {Object.keys(partner).map((item) => {
                return(
                   <div>{item.name}</div>
                )
            })}  

    </>
    );
};

export default OurPartner;



