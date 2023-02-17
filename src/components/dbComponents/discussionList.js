import DiscussionTopic from "./discussionTopicSimple"

const DiscussionList = (props) => {
    console.log(props.list);
    return (
        <>
            <div className = "topics">
            {
                props.list.map((element) => {
                    return (<DiscussionTopic data={element} />)
                })
            }
            </div>
        </>
    )
}

export default DiscussionList;