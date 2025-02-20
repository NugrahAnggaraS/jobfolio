import '../styles/category.css'

function Categories() {
    const category = ["Remote","Work from home","Part-time","Design"];
    return(
        <div>
            <div className="categories">
                {
                    category.map(category =>{
                        return <p>{category}</p>
                    })
                }
            </div>
        </div>
    )
}

export default Categories;