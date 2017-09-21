# Movie Database Api

This api side of this application is written in ASP.NET Core 2.0. Before running, please visit the link below to get .Net Core installed locally so you can build and run:

https://www.microsoft.com/net/download/core

Once .Net Core is installed locally, follow these steps to launch the web server for the api:

 1. Traverse to the api directory `MovieDatabase/MovieDatabase.Api`.
 2. Type `dotnet restore` in the terminal; This will restore all the base and Nuget packages the app needs to run.
 3. Lastly, type in `dotnet run` to kick off an Kestrel instance that will run in the terminal.
 4. The API app location should be `http://localhost:5000`.

# Movie Database Client

This client side of this application is written using Angular 4. Before running, follow these steps to launch the client for the application (In a separate terminal window):

 1. Traverse to the client side directory `MovieDatabase/MovieDatabase.Client`.
 2. Let's make sure you have node installed: You can use these commands respectively: `npm --v`
 3. Then, let's make sure we have Angular 4 Installed, you can check first using `ng -v`; If not, visit this next link to get the new angular cli installed:
 4. https://angular.io/guide/quickstart
 5. Once those are both configured, we need to pull in all of our node packages using `npm i`.
 6. Lastly, we can kick off the angular server using `ng serve`

### Where's the database?
The database is `MS SQL` and its currently being hosted on `AWS RDS`. You'll notice the connection string is on the api application. For production purposes, I'd advise to move this to an encrypted file since we check it in.