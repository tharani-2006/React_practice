
function Details(props){
    const age=10;
    return(
        <div>
            <h3>name : {props.name}<br></br>
                age : {age}<br></br>
                district : {props.district}
            </h3>
        </div>
    )
}
export default Details;