import './homework.css';

export function Simpsons({sName, pSurname, vAge, sInfo, fPhoto}) {


    return (
        <div className={'simpsons'}>
            <h2>{sName} {pSurname} </h2>
            <b>{vAge} years</b>
            <p>{sInfo}</p>
            <img
                src={fPhoto}
                alt=""/>
        </div>
    );
}