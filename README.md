# ContentfulAngular18

## Commands used
### Steps
1. Install Apollo Angular in your project
```npx ng add apollo-angular``

2. Create a environments folder, then create environment.ts file and type your credentials for contentful
```
export const environment = {
    production: false,
    spaceId: '',
    accessToken: ''
}
```
    - Go "contentful.com", then enter in a Space, go to "Settings" below of your icon profile, create an API key and obtain your keys.
    - Remember to use 'Space ID' obtained from Contentful Settings for 'spaceId' inside environment.ts.
    - Remember to use 'Content Delivery API - access token' obtained from Contentful Settings for 'accessToken' inside environment.ts.



3. Create a "graphql" folder inside app folder, and start to create your graphql files using ".ts" like:
```getHeader.component.ts``

4. Look at this example to create your graphql query to be able to use after create it.
```
import { gql } from 'apollo-angular'

export const GET_HEADER = gql`
    query GetHeaderCollection {
        headerCollection(locale: $locale, preview: $preview, limit: $limit) {
        __typename,
            items{
                logoField{
                    link,
                    textAlternative{
                    textShortField
                    },
                    isLinkActive,
                    image{
                    url
                    }
                },
            }
        }
    }
`
```

5. Then in this example we have "header" component generated previously. So check to have a similar structure in your own component.



## Angular DOCS
``This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.``
### Development server
* Run `npx ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
* Run `npx ng generate component component-name` to generate a new component. You can also use `npx ng generate directive|pipe|service|class|guard|interface|enum|module`.
* Run `npx ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
* Run `npx ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* Run `npx ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


## Other downloads you'll probably use
* https://www.npmjs.com/package/ngx-markdown

## Based on
* https://www.youtube.com/watch?v=Z5QRCctfcLI
* https://www.contentful.com/developers/docs/javascript/tutorials/using-contentful-in-an-angular-project/
* https://angular.dev