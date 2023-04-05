import { useState } from "react"
import axios from 'axios';
import FinancialPageForm from "./FinancialPageForm";

const FinancialPage = (props) => {
    const [formValues] = useState({ referenceNumber: '' })
    
    const onSubmit = referenceDto => {
        const headers = {
            'Content-Type': 'application/json'
        }
        axios.post(
            // Where?
            '',
            referenceDto,
            { headers }
        )
            .then(res => {
                if (res.status === 200) {

                } else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong'))
    }

    return (
        <FinancialPageForm option={props.option} initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize >
            Search
        </FinancialPageForm>
    )
}

export default FinancialPage