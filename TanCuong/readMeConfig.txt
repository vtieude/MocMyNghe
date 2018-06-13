Two links follow config angular and asp .net core
https://medium.com/@levifuller/building-an-angular-application-with-asp-net-core-in-visual-studio-2017-visualized-f4b163830eaa 
http://www.talkingdotnet.com/how-to-create-an-angular-6-app-with-visual-studio-2017/
1. 
we need install npm, angular 6, asp .net core,.
2. 
Run serve : dotnet run
Build angualr: ng build
Port serve at company 49954
Port angular 4200
ng serve --proxy-config proxy.config.json
3. No care about this issue
Save     <PostBuildEvent>ng build --aot</PostBuildEvent> here
