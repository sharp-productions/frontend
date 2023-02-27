import { useSelector } from "react-redux";
import { Header } from "../../components/header";

export const Docket = () => {
    const profile = useSelector(state => state.profile.profile)

    return (
        <>
            <Header />
            <div>This is the Docket route.</div>
            <div>Hello {profile.firstName} {profile.lastName}</div>
        </>
    );
}