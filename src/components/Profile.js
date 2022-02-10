import React,{useState} from 'react'

const Profile = (props) => {    

    const [name,setname]=useState("");
          
        console.log(props);
        //   console.log("User Details",res.user);
        //   setname(res.user.displayName);

          return(        
        <> <br /><br/>
        <br/>
        <br/>
        <br/>
            <h1>Profile Page</h1>
            <h3>Name : - {name}</h3>
        </>
    ) 
}

export default Profile;