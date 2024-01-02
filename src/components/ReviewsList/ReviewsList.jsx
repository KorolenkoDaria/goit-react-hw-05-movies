import ReviewsItem from "components/ReviewsItem/ReviewsItem"

import { StyledUl } from "./ReviewsList.styled"
const ReviewsList = ({ review }) => {
    return (
        <StyledUl>
            {review && <ReviewsItem review={review} />}
        </StyledUl>
    )
}

export default ReviewsList;