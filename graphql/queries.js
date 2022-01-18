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
export const GET_LAUNCH_BYID = gql`
  query getLaunchById($id: ID!) {
      launch(id: $id) {
        id
        mission_name
        links {
          flickr_images
        }
        details
      }
  }
`;