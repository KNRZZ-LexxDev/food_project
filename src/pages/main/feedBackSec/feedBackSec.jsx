import React from "react";
import { FeedbackContext } from "../../../context/feedback-context";
import { FormFeedback } from "../../../components/form/form-feedback";
import './style.scss'
export const FeedBackSec = () => {
    return(
        <div className="feedBackSec">
            <p className="feedBackSec__head">Leave <span className="feedBackSec__head-part">Feedback</span> </p>
            <FormFeedback/>
        </div>
    );
}