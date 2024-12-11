import React, { useContext } from "react";
import { FeedBackContextItems } from "../../context/feedbackitems-context";
import { FeedBackComponent } from "../../components/feedback__component/feedBackComponent";
import './style.scss';

export const FeedBackPage = () => {
    const { feedBackItems, setFeedBackItems } = useContext(FeedBackContextItems);

    const updateFeedbackItem = (index, updatedProps) => {
        setFeedBackItems((prevItems) => {
            const newItems = [...prevItems];
            newItems[index] = { ...newItems[index], ...updatedProps };
            return newItems;
        });
    };

    const handleProcessFeedback = (index) => {
        updateFeedbackItem(index, { isPending: true });

        setTimeout(() => {
            setFeedBackItems((prevItems) => prevItems.filter((_, i) => i !== index));
        }, 3000);
    };

    return (
        <div className="feedBackPage">
            <div className={`feedBackPage__wrap ${feedBackItems.length < 2 ? 'feedBackPage__wrap--short' : ''}`}>
                {feedBackItems.length === 0 ? (
                    <h1 className="feedBackPage__head">
                        FeedBack <span className="feedBackPage__head-part">is no more...</span>
                    </h1>
                ) : (
                    <>
                        <h1 className="feedBackPage__head">
                            All Our <span className="feedBackPage__head-part">Feedback</span>
                        </h1>
                        {feedBackItems.map((elem, index) => (
                            <FeedBackComponent
                                key={index}
                                name={elem.user_name}
                                phone={elem.user_phone}
                                desc={elem.user_description}
                                isPending={elem.isPending}
                                onProcess={() => handleProcessFeedback(index)}
                            />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};
