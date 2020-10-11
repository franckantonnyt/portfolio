import styled from 'styled-components';
import CardModal from '../../assets/images/card-modal.png';

export const Container = styled.div`
  width: 13rem;
  height: 21rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .background-card-modal {
    width: 8rem;
    height: 12rem;
    background: url(${CardModal});
    transition: 1s;
    display: flex;
    cursor: pointer;
    align-items: center;
    background-size: 8rem;
    flex-direction: column;
    justify-content: center;
    filter: grayscale(100%);
    background-position: center;
    background-repeat: no-repeat;

    .header-card-modal {
      width: 95%;
      height: 53%;

      .header-img-card {
        width: 100%;
        height: 90%;
        display: flex;
        align-items: flex-end;

        .header-details-card {
          width: 25%;
          padding: 0px 0.2rem;
          height: 70%;
          display: flex;
          align-items: center;
          margin-left: 0.8rem;
          flex-direction: column;
          justify-content: center;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0),
            rgba(34, 8, 43, 0.2),
            rgba(34, 8, 43, 0.3),
            rgba(34, 8, 43, 0.2),
            rgba(0, 0, 0, 0)
          );

          p {
            width: 100%;
            height: auto;
            color: whitesmoke;
            font-size: 0.7rem;
            text-align: center;
            padding-bottom: 5px;
            border-bottom: 1px solid rgba(44, 232, 213, 0.3);
          }

          img {
            width: 75%;
            height: auto;
          }
        }

        .img-first-child {
          margin: 5px 0px;
          padding-bottom: 5px;
          border-bottom: 1px solid rgba(44, 232, 213, 0.3);
        }

        .header-img {
          width: 75%;
          height: 70%;
          display: flex;
          padding-left: 0.1rem;
          padding-right: 0.3rem;
          align-items: flex-end;

          img {
            width: 100%;
            height: auto;
          }
        }
      }

      .header-title-card {
        width: 100%;
        height: 10%;
        display: flex;
        transition: 1s;
        color: whitesmoke;
        font-size: 0.4rem;
        text-align: center;
        align-items: flex-end;
        justify-content: center;
      }
    }

    .body-card-modal {
      width: 95%;
      height: 47%;
      display: flex;
      transition: 1s;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      padding: 0.2rem 1.6rem 1.1rem 1.6rem;

      .details-card-modal {
        margin: 0;
        width: 100%;
        height: 30%;
        display: flex;
        margin-bottom: 5px;
        text-align: center;
        align-items: center;
        justify-content: center;
        border-top: 1px solid rgba(44, 232, 213, 0.5);

        .details-card-left {
          width: 50%;
          height: 100%;
          padding: 5px;
          display: flex;
          align-items: center;
          margin-top: 0.5rem;
          justify-content: center;
          border-right: 1px solid rgba(44, 232, 213, 0.5);
        }

        .details-card-right {
          width: 50%;
          height: 100%;
          padding: 5px;
          display: flex;
          margin-top: 0.5rem;
          align-items: center;
          justify-content: center;
        }

        img {
          width: 30%;
          height: auto;
        }

        p {
          height: 100%;
          display: flex;
          margin: 0 auto;
          transition: 1s;
          margin-left: 5px;
          color: whitesmoke;
          font-size: 0.3rem;
          text-align: center;
          padding-bottom: 5px;
        }
      }

      .details-card-description {
        width: 100%;
        height: 70%;
        border-top: 1px solid rgba(44, 232, 213, 0.5);
      }

      .details-card-footer {
        width: 25%;
        height: 1px;
        background-color: rgba(44, 232, 213, 0.5);
      }
    }
  }

  .background-card-modal:hover {
    width: 100%;
    height: 100%;
    background-size: 14rem;
    filter: grayscale(0%);

    .header-title-card {
      font-size: 1rem;
    }

    .body-card-modal {
      padding: 0.2rem 1.6rem 2rem 1.6rem;
    }

    .details-card-modal {
      p {
        font-size: 1rem;
        margin-top: 3px;
      }
    }
  }
`;
