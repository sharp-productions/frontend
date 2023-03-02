import { useSelector } from "react-redux";
import { Header } from "../../components/header";
// import { ReactComponent as CheckCircle } from "../../components/icons/checkCircle.svg"
// <CheckCircle className="card-title-icon" />


export const Docket = () => {
    let profile = useSelector(state => state.profile)
    // Give Docket access to profile on page reload.
    if (Object.keys(profile).length === 0) {
        profile = JSON.parse(localStorage.getItem("profile"))
    }

    return (
        <>
            <style>{`
                .el-card {
                    list-style-type: none;
                }
                .card-title-icon {
                    margin-left: 10px;
                    height: 30px;
                    width: 30px;
                    fill: gray;
                }
                .card-center {
                    margin-left: auto;
                    margin-right: auto;
                }
            `}</style>
            <Header />
            <div className="container">
                <h1>Hi {profile.firstName} 👋</h1>
                <h2>Welcome to EasyLegal.app, your cloud-based case manager</h2>
                <div className="card w-75 mb-3 card-center">
                    <div className="card-header">
                        <h2 style={{ display: "inline" }}>Step 1: Create a client</h2>
                    </div>
                    <div className="card-body">
                        <p className="card-text">When you create a client, you'll be asked for client biographic and client billing data.</p>
                        <p className="card-text">(You can make this self service in Settings)</p>
                        <a href="/clients" className="btn btn-primary">Create Client</a>
                    </div>
                </div>
                <div className="card w-75 mb-3 card-center">
                    <div className="card-header">
                        <h2 style={{ display: "inline" }}>Step 2: Create a case</h2>
                    </div>
                    <div className="card-body">
                        {/* <h5 className="card-title">Click "Cases" in the header above (or anywhere in the button below)</h5> */}
                        <p className="card-text">When you create a client, a new case is created for that client by default.</p>
                        <p className="card-text">We'll ask a few follow up questions about the case (civil/criminal, jurisdiction, court, judge, etc.)</p>
                        <a href="/cases" className="btn btn-primary disabled">Create Case</a>
                    </div>
                </div>
                {/* <div className="row"> */}
                <div className="card w-75 mb-3 card-center">
                    <div className="card-header">
                        <h2 style={{ display: "inline" }}>Step 3: Add Events, Tasks, and Notes</h2>
                    </div>
                    <div className="card-body">
                        <div>
                            <h5 className="card-title" style={{ display: "inline" }}>Add Events:</h5><p className="card-text" style={{ display: "inline" }}>Keep track of hearings, filling deadlines, phone calls, appointments and more!</p>
                        </div>
                        <div>
                            <h5 className="card-title" style={{ display: "inline" }}>Add Tasks:</h5><p className="card-text" style={{ display: "inline" }}>Create tasks for you, your staff or your client to complete, e.g., request criminal history, upload documents, etc.</p>
                        </div>
                        <div>
                            <h5 className="card-title" style={{ display: "inline" }}>Add Notes:</h5><p className="card-text" style={{ display: "inline" }}>Create attorney work product</p>
                        </div>
                        <a href="/work" className="btn btn-primary disabled">Get to Work!</a>
                    </div>
                </div>
            </div>
        </>
    );
}