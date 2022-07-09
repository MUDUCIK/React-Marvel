import styled from 'styled-components'

export const Style = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  height: 350px;

  padding: 25px;

  background-color: #fff;
  box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.25);

  .name {
    font-weight: 700;
    font-size: 1.125rem;
  }

  .search-form {
    display: flex;
    justify-content: space-between;
    gap: 24px;

    padding-right: 15px;

    input {
      width: 100%;

      border: none;
      padding: 10px;

      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      outline: none;

      transition: box-shadow 0.3s ease;

      &:focus {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      }

      ::placeholder {
        color: ${({ theme }) => theme.colors.mainBgGrey};
        opacity: 1;
        font-size: 14px;
      }

      :-ms-input-placeholder {
        color: ${({ theme }) => theme.colors.mainBgGrey};
        font-size: 14px;
      }

      ::-ms-input-placeholder {
        color: ${({ theme }) => theme.colors.mainBgGrey};
        font-size: 14px;
      }
    }
  }

  .text {
    color: ${({ error, theme }) =>
      error ? theme.colors.mainRedColor : theme.colors.mainSuccessColor};
    font-weight: 700;
    font-size: 18px;
  }

  .results {
    display: flex;
    flex-direction: column;
    gap: 15px;

    height: 100%;

    padding: 0 10px 0 0;
    margin: 0;

    list-style-type: none;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.mainRedColor};
      border-radius: 1rem;
    }

    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
    }

    &__text {
    }
  }

  .result {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;

    min-height: 44px;

    &__text {
    }
  }
`
