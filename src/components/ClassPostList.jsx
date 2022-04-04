import React from 'react';
import ClassPost from "./ClassPost";

class ClassPostList extends React.Component{

    // eslint-disable-next-line no-useless-constructor
    constructor({posts}) {
        super({posts})

    }

    render() {
        return (
            <div>
                <h1 style={{textAlign:"center"}}>
                    List of posts
                </h1>
                {this.posts.map((post) =>
                    <ClassPost post={post} key={post.id} />
                )}
            </div>
        )
    }

}

export default ClassPostList;