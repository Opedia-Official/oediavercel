export default function  Opedia404() {

const backgroundC = {
    // backgroundColor: '#f5ddda',

}
const styling = {
    // backgroundImage: `${img}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width:'25vw',
    margin:'7% auto',
    position: 'relative'
}
const lowerImage = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform:" translate(-50%, -50%)"
    
}
    return (
        <div style={backgroundC} className="container mb-100">
        
        <div style={styling} className="img">
            <img src="./error/404.png" alt="" />
            <img style={lowerImage} src="./error/vector.png" alt="" />
        </div>
        <h3 style={{textAlign: 'center',padding:'10px 20px 10px',color: '#f4977b',fontWeight: '800' }}>Opps!. The page you requiested was not found! </h3>
        <p style={{textAlign: 'center',padding:'4px 20px 20px',fontWeight: '800' }}>sorry, But the page you are looking for doesn't exist</p>
        </div>
    )
}