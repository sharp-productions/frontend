import { useSelector } from "react-redux"

import { Header } from "../../components/header"

export const Profile = ({ match }) => {

    const profile = useSelector(state => state.profile)

    if (!profile) {
        return (
            <>
                <Header />
                <section>
                    <h2>Profile not found!</h2>
                </section>
            </>
        )
    }

    return (
        <>
            <Header />
            <section>
                <article className="post">
                    <h2>Profile</h2>
                    <p>`Name: ${profile.firstName} ${profile.lastName}`</p>
                    <p>Email: {profile.email}</p>
                    <div>
                        <p>{profile.address}</p>
                        <p>{profile.city}, {profile.staet}  {profile.zip}</p>
                    </div>
                </article>
            </section>
        </>
    )
}