# Travel Blog Project
## Introduction
The goal of this project is to create a Blog web application using **Node.js**, **Express.js**, and **EJS**.  
The application will allow users to create and view blog posts. Posts will not persist between sessions as no database will be used in this version of the application. Styling will be an important aspect of this project to ensure a good user experience.  
## How to run the project locally
1. Clone using the web URL
   > https://github.com/wensheng-li/travel-blogs.git
2. Or Download ZIP file to your local environment
3. Install the packages (Express & EJS Packages)  
   `npm i express ejs`  
4. Create **.env.dev** file for the local environment configuration
   > PORT=Your local available port number
   > NODE_ENV=development
   > 
   > SITE_NAME=Travel Blogs
   > DESCRIPTION=Share your travel experiences and tips with the world!  
5. Run the project in your terminal/ CMD   
   `node index.js` OR  
   `nodemon index.js`
   > For the **nodemon index.js**, you may need to install the **nodemon** first.  
   `npm install -g nodemon # or using yarn: yarn global add nodemon`  
   **Note:** *https://www.npmjs.com/package/nodemon*