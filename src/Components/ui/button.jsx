import "./button.css"

const Button = ({ children, variable }) => {
    return (
        <>
            {
                variable === "primary" ? <button className="primary"></button>
                : 
                <button className="secondary"></button>
            }


        </>
    )
}

export default Button