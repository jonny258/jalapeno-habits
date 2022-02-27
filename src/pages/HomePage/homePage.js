import {Route, Routes} from "react-router-dom"

const homePage = () => {

    return(
        <div>
            <section>
                <label>Add new board</label>
                <button></button>
            </section>
            <section>
                <Routes>
                    <Route path="login">

                    </Route>
                    <Route path="profile">

                    </Route>
                </Routes>
            </section>
        </div>
    )
}

export default homePage;
