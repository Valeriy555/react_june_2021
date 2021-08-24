export default function Post({postItem}) {


    return (

        <div>
            <p>
                <b> UserId:</b> {postItem.userId}
                <b> Id:</b> {postItem.id}<br/>
                <b>Title:</b> {postItem.title}<br/>
                <b>Body:</b> {postItem.body}
            </p>
        </div>
    );
}
