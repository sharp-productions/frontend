import { useSelector } from "react-redux"

import { Header } from "../../components/header"

export const ChargeDetail = ({ match }) => {
    const { chargeId } = match.params

    const charge = useSelector(state =>
        state.charges.find(charge => charge.id === chargeId)
    )

    if (!charge) {
        return (
            <>
                <Header />
                <section>
                    <h2>Charge not found!</h2>
                </section>
            </>
        )
    }

    return (
        <>
            <Header />
            <section>
                <article className="post">
                    <h2>Case Number {charge.caseNumber}</h2>
                    <p>Incident Date: {charge.incidentDate}</p>
                    <p>Charge Name: {charge.chargeName}</p>
                    <p>Prosecutor: {charge.chargeStatute}</p>
                </article>
            </section>
        </>
    )
}