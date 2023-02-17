import SideBarSorting from "../../components/ppComponents/SideBarSorting";
import DiscussionList from "../../components/dbComponents/discussionList";

function app(props) {
    console.log(props)
    return (
        <>
        <div className="discussionContent">
            <SideBarSorting />
            <DiscussionList list={props.list} />
            
        </div>
            
        </>
        
    )
}

export default app;