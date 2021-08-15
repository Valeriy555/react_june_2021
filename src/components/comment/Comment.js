export default function Comments({value: commentValue}) {


    return (

        <div>
            <p>
                <b> UserId:</b> {commentValue.postId}
                <b> Id:</b> {commentValue.id}<br/>
                <b>Name:</b> {commentValue.name}<br/>
                <b>Email:</b> {commentValue.email}<br/>
                <b>Body:</b> {commentValue.body}
            </p>
        </div>
    );
}