
const Mybook = () => {
    let booklist = ["HTML", "CSS", "Bootstrap", "React", "Node", "MongoDB", "MySQL", "PHP"];

    return (
        <div className="container">
            <h1> Manage Books : { booklist.length} </h1>
            
            {
                booklist.map((bookname, index) => {
                    return (
                        <p key={index} className="four"> {bookname} </p>
                    )
                })
            }
        </div>
    )
}

export default Mybook;