C:\Users\yashw\OneDrive\Documents\GitHub\JustEntertain

npm start -> local server start ( ctrl+c to stop )
npm run build -> after making changes in local if you want to build for production
firebase deploy -> this should be run after building for production. the changes would reflect in production

index.html ( public folder ) 
index.js ( this will have app component )
App.js is the starting point.

two major parts -> js code, return statement at the end of js code ( includes jsx )
there can be an optional css file.

inside app.js there will be additional components for example: post tag. the code for this post tag can be found in post.js


database: 

for database we used cloud firestore in google firebase. it is a no sql database.
for authentication we used storage in firebase.
for hosting we used firebase hosting services.


overall flow: 

user will login -> will post

1. file will get uploaded to the firebase storage. and it returns a download url for the file.
2. the caption, obtained url, username will be stored in cloud firestore.
3. while displaying to user, all the posts ( files, captions) are retreived and presented.
4. similarly the comments...