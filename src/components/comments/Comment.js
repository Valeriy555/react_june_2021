export default function Comment({commentItem}) {

    return (

        <div>
            <p>
                <b> PostId:</b> {commentItem.postId}
                <b> Id:</b> {commentItem.id}<br/>
                <b>Name:</b> {commentItem.name}<br/>
                <b>Email:</b> {commentItem.email}<br/>
                <b>Body:</b> {commentItem.body}
            </p>
        </div>
    );
}