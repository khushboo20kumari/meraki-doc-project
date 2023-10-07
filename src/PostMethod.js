import { type } from "@testing-library/user-event/dist/type";

function PostMethod(){
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357&",{
       method:"POST",

       headers:{
        Accept:"application\json",
        Content:"applicaton\json",
       }

    })
    return(
        <>

        </>
    )
}
export default PostMethod;

