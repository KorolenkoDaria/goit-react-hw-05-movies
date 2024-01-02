import { StyledLi, StyledH5, StyledP } from "./ReviewsItem.styled"

const ReviewsItem = ({ review }) => {
    return (
        review.results.map((el) =>
            <StyledLi key={el.author}>
                <StyledH5>{el.author}</StyledH5>
                <StyledP>{el.content}</StyledP>
            </StyledLi>)

    )
}

export default ReviewsItem;