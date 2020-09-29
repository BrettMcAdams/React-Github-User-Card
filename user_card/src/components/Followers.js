import React from 'react'
import uuid from 'uuid/v4'


class Followers extends React.Component {

    render() {
        return (
            <div className="followers">
                <h2>Followers:</h2>
                {this.props.followers.map(item => (
                    <div key={uuid()} className='gCardDisplay' >
                        <h2>{item.name}</h2>
                        <img width='100' height='100' src={item.avatar_url} alt='searched user follower avatar' />
                        <p>Username: {item.login}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Followers
