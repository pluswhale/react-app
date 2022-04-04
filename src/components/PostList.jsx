import React from 'react';
import ClassPost from "./ClassPost";
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

    if(!posts.length) {
        return (
            <h1 style={{textAlign:'center'}}>
                Post doesnt find!
            </h1>
        )
    }

    return (
        <div>
            <div>
                <h1 style={{textAlign:"center"}}>
                    {title}
                </h1>
                <TransitionGroup>
                    {posts.map((post, index) =>
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                        >
                            <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    );
};

export default PostList;