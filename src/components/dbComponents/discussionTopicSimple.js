
const DiscussionTopicSimple = (props) => {
console.log(props.data.title);
    return (
        <>
            <div className="topicCard">
                <ul>
                    <li className="topicTitle">
                        {props.data.title}
                    </li>
                    <li className="topicDesc">
                        {props.data.description}
                    </li>
                    <li className="topicCategory">
                        {props.data.category}
                    </li>
                    <li className="topicRating">
                        {props.data.rating}
                    </li>
                    
                    <li className="comments">
                    {props.data.comments.map((element) => {
                        return (<li className="comment"> 
                            <div className="commentAuthor">{element.author} </div>
                            <div className="commentContent">{element.comment}</div>
                        </li>)
                    })}
                    </li>
                    

                </ul>
            
            </div>
        </>
    )
}

export default DiscussionTopicSimple;