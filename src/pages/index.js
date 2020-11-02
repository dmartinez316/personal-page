import React from "react"
import Header from "../components/header"
import Repos from "../components/repos"
import Medium from "../components/medium"
import Codigofacilito from "../components/codigofacilito"
import Nav from "../components/nav"

export default () => {
    return (
        <React.Fragment>
            <Header />
            <Nav />
            <Repos />
            <Codigofacilito />
            <Medium />
        </React.Fragment>
    )
}
