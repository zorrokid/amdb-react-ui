# React basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [React](https://reactjs.org/) apps in minutes. Use this repo with the [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react) to build and customize a new static site.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

    cd api
    npm run build
    cd ..
    npm run build
    swa start build --api-location api

# problems

When testing with Static Web Apps CLI: "swa.ps1 is not digitally signed"

    PS C:\Users\xyz\projects\amdb-react-ui> swa start build --api-location api
    swa : File C:\Users\keinamik\AppData\Roaming\npm\swa.ps1 cannot be loaded. The file C:\Users\keinamik\AppData\Roaming\npm\swa.ps1 is not digitally signed. You cannot run this script on the current system. For more information    
    about running scripts and setting execution policy, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
    At line:1 char:1
    + swa start build --api-location api
    + ~~~
        + CategoryInfo          : SecurityError: (:) [], PSSecurityException
        + FullyQualifiedErrorId : UnauthorizedAccess

Set unrestricted execution policy for current user

    Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
