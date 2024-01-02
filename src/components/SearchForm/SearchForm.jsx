
import { ReactComponent as SearchIcon } from "../../images/search-icon.svg"

import { useSearchParams } from "react-router-dom";

import Container from "components/Container/Container";

import { StyledForm, StyledInput, StyledButton } from "./SearchForm.styled"
const SearchForm = () => {

    const [searchParams, setSearchParams] = useSearchParams({});

    const query = searchParams.get('query') || '';

    function onSubmitForm(evt) {
        evt.preventDefault();
        const value = evt.target[0].value.trim();
        setSearchParams({ query: value });
    }
    return (
        <Container>
            <StyledForm onSubmit={onSubmitForm} action="">
                <StyledInput type="text" defaultValue={query} placeholder="Enter movie title" />
                <StyledButton><SearchIcon /></StyledButton>
            </StyledForm>
        </Container>
    )
}

export default SearchForm;