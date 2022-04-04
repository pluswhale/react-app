import React from "react";

class ClassPost extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div className="post">
                <div className="post__content">
                    <strong>{this.props.post.id}. {this.props.post.title}</strong>
                    <div>
                        {this.props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}

export default ClassPost