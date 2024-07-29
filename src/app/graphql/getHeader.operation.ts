import { gql } from 'apollo-angular';

export const GET_HEADER = gql`
  query GetHeaderCollection($locale: String, $preview: Boolean, $limit: Int) {
    headerCollection(locale: $locale, preview: $preview, limit: $limit) {
      __typename
      items {
        logoField {
          link
          textAlternative {
            textShortField
          }
          isLinkActive
          image {
            url
          }
        }
        productsTextField {
          textShortField
          link
          isLinkActive
        }
        concreteCalculatorTextField {
          textShortField
          link
          isLinkActive
        }
        toolsTextField {
          textShortField
          link
          isLinkActive
        }
        contactUsTextField {
          textShortField
          link
          isLinkActive
        }
        newOrderButton {
          textField {
            textShortField
          }
          link
          isLinkActive
        }
        signInButton {
          textField {
            textShortField
          }
          link
          isLinkActive
        }
        languageField {
          data
        }
        zipCodeTitleField {
          textShortField
        }
        zipCodeSubtitleField {
          textShortField
        }
      }
    }
  }
`;
