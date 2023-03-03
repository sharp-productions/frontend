import { useSelector } from "react-redux"

import { Header } from "../../components/header"

export const Settings = ({ match }) => {

    const settings = useSelector(state => state.settings)

    if (!settings) {
        return (
            <>
                <Header />
                <section>
                    <h2>Settings not found!</h2>
                </section>
            </>
        )
    }

    return (
        <>
            <Header />
            <section>
                <article className="post">
                    <h2>This is the Settings view.</h2>
                </article>
            </section>
        </>
    )
}