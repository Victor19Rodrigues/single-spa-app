import styled from '@emotion/styled'

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .MuiInputLabel-root,
  .MuiInputLabel-root::placeholder {
    font-size: 1.6rem;
  }

  .MuiInputLabel-root {
    line-height: 5.2rem;
  }

  label.Mui-focused {
    color: #C4C4CC;
  }

  .MuiInputLabel-root {
    color: #c4c4cc;
  }

  .MuiInputBase-root::after {
    border-bottom: 2px solid #c4c4cc;
  }

  .MuiInputBase-root::before {
    border-bottom: 2px solid #c4c4cc;
  }

  .MuiInputBase-root:hover {
    border-bottom: 2px solid #8D8D99;
  }

  .MuiFormHelperText-root {
    font-size: 1.4rem;
    color: red;
  }

  input {
    height: 5.2rem;
    font-size: 1.6rem;
    color: #C4C4CC;
  }
`
