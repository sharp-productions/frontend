import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createCase, updateCase } from './casesAPI'

export const CaseInputForm = ({ caes, closeHandler, mode }) => {
    caes = caes || {}
    const [caseState, setCaseState] = useState({
        id: caes.id || "",
        caseNumber: caes.caseNumber || "",
        client: caes.client || "",
        court: caes.court || "",
        jurisdiction: caes.jurisdiction || "",
        judge: caes.judge || "",
        prosecutor: caes.prosecutor || ""
    })

    const dispatch = useDispatch()

    const onInputChanged = ({ target }) => {
        const { name, value } = target
        setCaseState({
            ...caseState,
            [name]: value
        })
    }

    const onSaveCaseClicked = () => {
        if (caseState.caseNumber) {
            if (mode === "add") {
                delete caseState.id
                dispatch(createCase(caseState))
            } else {
                dispatch(updateCase(caseState))
            }
            setCaseState({
                caseNumber: "",
                client: "",
                court: "",
                jurisdiction: "",
                judge: "",
                prosecutor: "",
            })
            closeHandler()
        }
    }

    return (
        <>
            <style>{`
                .center {
                    margin-left: auto;
                    margin-right: auto;
                }
            `}</style>
            <div className="modal fade show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" style={{ display: "block" }}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{mode === "add" ? "Create" : "Edit"} Case</h1>
                            <button type="button" className="btn-close" onClick={closeHandler}></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-md-7 col-lg-8 center">
                                <h2>{"mode" === "add" ? "Add a New Client" : "Client Details"}</h2>
                                <form className="needs-validation" noValidate>
                                    <div className="row g-3">
                                    <div className="col-sm-12">
                                            <label htmlFor="lastName" className="form-label">Client:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="client"
                                                name="client"
                                                value={caseState.client}
                                                onChange={onInputChanged}
                                            />
                                        </div>
                                        <div className="col-sm-12">
                                            <label htmlFor="firstName" className="form-label">Case Number:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="caseNumber"
                                                name="caseNumber"
                                                value={caseState.caseNumber}
                                                onChange={onInputChanged}
                                            />
                                        </div>
                                        <div className="col-sm-12">
                                            <label htmlFor="lastName" className="form-label">Court:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="court"
                                                name="court"
                                                value={caseState.court}
                                                onChange={onInputChanged}
                                            />
                                        </div>
                                        <div className="col-sm-12">
                                            <label htmlFor="dob" className="form-label">Jurisdiction:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="jurisdiction"
                                                name="jurisdiction"
                                                value={caseState.jurisdiction}
                                                onChange={onInputChanged}
                                            />
                                        </div>
                                        <div className="col-sm-12">
                                            <label htmlFor="email" className="form-label">Judge:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="judge"
                                                name="judge"
                                                value={caseState.judge}
                                                onChange={onInputChanged}
                                            />
                                        </div>
                                        <div className="col-sm-12">
                                            <label htmlFor="phone" className="form-label">Prosecutor:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="prosecutor"
                                                name="prosecutor"
                                                value={caseState.prosecutor}
                                                onChange={onInputChanged}
                                            />
                                        </div >
                                    </div>
                                </form >
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"  onClick={closeHandler}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={onSaveCaseClicked}>Save Client</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show" />
        </>
    )
}