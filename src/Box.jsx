import './Box.css'

const Box = ({color, width, height, id, removeBox}) => {
    return <><div style={{
        width: `${width}px`, 
        height: `${height}px`,
        backgroundColor: color}}
        id={id} className="Box" />
        <button className="Box-button" onClick={() => {removeBox(id)}}>x</button>
        <br/></>
}

export default Box