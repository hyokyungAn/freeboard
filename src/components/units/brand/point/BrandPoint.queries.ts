import { gql } from "@apollo/client";

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      impUid
      amount
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions {
    fetchPointTransactions {
      _id
      amount
      balance
    }
  }
`;
