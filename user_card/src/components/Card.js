import React from 'react'

class Card extends React.Component {
    render() {
        return (
            <div className='gCardDisplay' >
                <h2>{this.props.gCard.name}</h2>
                <img width='200' height='200' src={this.props.gCard.avatar_url} alt='searched user avatar'/>
                <p>Username: {this.props.gCard.login}</p>
                <p>Bio: {this.props.gCard.bio}</p>
                <p>Location: {this.props.gCard.location}</p>
            </div>
        )
    }
}

export default Card
