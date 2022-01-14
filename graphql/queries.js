import { gql } from "@apollo/client";
export const GET_LAUNCHES = gql`
{
    launchesPast(limit: 22) {
      id
      mission_name
      links {
        flickr_images
      }
      details
    }
  }
  
`;