// import { gql } from '@apollo/client';
import React, { Fragment, useState } from "react";
import gql from 'graphql-tag'

// export const ALLOCATION_DATA = gql`
//   fragment Allocation on Deal {
//      __typename
//      delivery
//      assignmentId
//   }
// `;

export const GET_DEAL = gql`
  query GetDeal($id: ID!, $allocation: allocation ) {
    Deal(id: $id) {
      id
      industry
      pid
      client
      dealName
      ppRevenue
      commitMargin
      currentMargin
      projectRevenue
      dealStatus
      allocation {
        client
        dealName
      }
     }
  }
`;

// export const GET_DEALS = gql`
//   query GetDeals {
//     allDeals {
//       id
//       # industry
//       # pid
//       # client
//       # dealName
//       # ppRevenue
//       # commitMargin
//       # currentMargin
//       # projectRevenue
//       # dealStatus
//       allocation {
//         assignmentId
//       }
//     }
//   }
// `;
