import styled from '@emotion/styled'

export const Container = styled.span`
  display: flex;
  width: 100%;

  .MuiSvgIcon-root {
    font-size: 2rem;
  }

  input {
    color: #c4c4cc;

    &:checked + svg {
      color: #c4c4cc;
    }
  }

  .MuiTypography-root {
    font-size: 1.6rem;
  }

  .MuiCheckbox-root {
    color: #c4c4cc;
  }
`
