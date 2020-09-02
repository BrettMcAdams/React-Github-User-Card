import React from 'react'

class Followers extends React.Component {

    render() {
        return (
            <div className="followers">
                <h2>Followers:</h2>
                {this.props.followers.map(item => (
                    <div className='gCardDisplay' >
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
