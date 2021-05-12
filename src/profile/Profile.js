import React from 'react'
import ProPic from './ProPic'
import propTypes from 'prop-types'

const Profile = ({ fullName = "no name", bio = "no bio", profession = "no job", handleName = () => { } }) => {


    return (

        <div style={{ backgroundImage: `url("https://strucklightning.files.wordpress.com/2019/06/developer.png")`, backgroundSize: 500, backgroundColor: 'lightgrey', width: 475, borderStyle: 'solid', borderRadius: 20, margin: 25, padding: 15 }}>
            {handleName(fullName)}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <ProPic />
                <h1>{fullName}</h1>
            </div>
            <div style={{ margin: 25 }}>
                <h4 style={{ fontSize: 20, color: '#000' }}>{bio} </h4>
                <h2>{profession}</h2>
            </div>

        </div>
    )
}
Profile.propTypes = {
    fullName: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
    handleName: propTypes.func
}

export default Profile
