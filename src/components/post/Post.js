export default function Posts({value: postValue}) {


    return (

        <div>
<p>
                <b> UserId:</b> {postValue.userId}
                <b> Id:</b> {postValue.id}<br/>
                <b>Title:</b> {postValue.title}<br/>
                <b>Body:</b> {postValue.body}
</p>
        </div>
    );
}