import { useState } from "react"
import axios from 'axios';
import BuyerPageForm from "./BuyerPageForm";

const BuyerPage = () => {
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
        <BuyerPageForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Search
        </BuyerPageForm>
    )
}

export default BuyerPage