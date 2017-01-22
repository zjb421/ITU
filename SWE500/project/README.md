ConnectPlus App Readme

1.The Application Functionality

2.Target Audience

3.Software Architecture

4.Technical Solutions

5.Impact to ITU

--------------

ITU Software Engineering - Spring 2016
Project :- ConnectPlus


Logo! 
http://tmpfile.freelogodesign.org/ba068e9d-3119-495c-ad6b-eb51b0d9fe86.png
Project url: https://jamesz.us/project
1. Project Goal (business case)
        	1.1. Purpose (Hung) :1 stop solution that can get your questions answered instantly! Connect people with professional skilled individuals and users across online platform.
More service categories
Real Time Support
Global Access
	1.2. Discriminators/Competitors: Ask.com, Gotitapp.co
1.3. Possible market: Real-time Online Services - Globally
1.4. Patent/trade mark: To start with, we search US database for existance of company name at url:- https://www.sec.gov/edgar/searchedgar/companysearch.html, later we get our company name registered, get ‘connectplus’ patented with http://www.uspto.gov/ 
2. Project Timeline -
Phase 1: Hiring professionals to work for our platform
Phase 2: Open to be applied by real users who want to make extra money for certain skills (Uber platform alike)
3. Requirement engineering (Software Engineering) 
3.1. Summary of functional requirements 
Connectivity: Connecting users across the platform in real time globally
User Acceptance: Users should be able to accept and decline the service
User Feedback: Users should be able to give honest feedbacks about the service offered.
Communication between users such as chat, call, video call: Users should be able to communicate with each others through chat, call and video call to negotiate and instruct the service.
Business rules: Users must follow standard business rules set by the professionals
Transaction Records and Corrections: System must be able to record all the services and transactions to make changes if needed.
Authentication: System must have authentication process to ensure user’s identity for safety purposes.
Authorization: System must be able to authorize user access after the authentication process
Reporting Requirements: System must be able to generate reports daily or weekly of all transactions processed.
Historical Data such as files and recordings: System must be able to store all the historical data on the cloud and have it accessible anytime.
Legal requirements: The company must have a set of all legal documents ready to be implemented if needed. The business must follow all legal requirements at all time
3.2. Summary of non-functional requirements
Functionality: System must be functional at all time. Technical agent on the side 24/7 to ensure the performance of the system.
Usability: the system must be user friendly and accessible at all time.
Reliability: System is reliable and stable at all time.
Performance - response time, utilization, static volumetric
Supportability: 24/7 live technical agent support via chat, email and call.
Security: system must be highly secured so ensure the confidential information of the users
Availability: System must be accessible at all time. Services offered in variety of categories.
Capacity: system must be able to handle large volume of users without interference.
Environmental: Online anytime.
Data Integrity
Recoverability: Transactions and user information must be able to be recovered at all time.

2. Product Architecture

Notes:

Client: CSS(bootstrap)/Html/Javascript
Server: 
Database: Firebase-> save/retrieve/delete data
Authentication: facebook API 


Database Structure and Sample



Product Specs:

	What we have now

Be able to log in with facebook credentials / Linkedin
Be able to edit/add your own services
Be able to delete your own service, cannot delete other people’s posts

What we are working on:

Category: each service will be assigned to a category
Be able to connect/accept other people's’ post, and make an agreement 
Admin: (maybe be able to chat), improve the service, admin panel
Credit card Validation, we need to manage the transaction
Feedback page: submit then feedbacks goes to the database, maybe we can show it on the webpage
Audit


C9 :- Folder Structure of the Program / App



3. Use case (template filled out)
Story how we came up with the product. What problem does it solve?
Every individual needs something or the other requirement and something or the other to offer, this is where we started, we wanted to have a system / application to connect the offerer & requestor instantaneously with global presence. Individual's request online on the other side other individual accepts the request online & reverts with solutions to the requestor, all of these happen instantaneously, requestor & acceptor have to get registered online validated through their credit card to get into the system, requestor pays per minute basis. One the request is serviced the requestor’s credit card is charged for the service, service provider gets paid immediately after deducting service & taxes applicable. 

As our team of Developers / Administrator / Project Manager / Quality Testers / Business analysts have a very vast personal experience with several services offered in the IT industry but to our astonishment we have never come across a one stop shop kind of solution which would answer any kind of need of any kind of people from any part of the globe.

Problem:- No single platform to answer any question, provide complete solution instantaneously

Solution:- Complete solution, everything online, instantaneous, any issue 

4. Use Case UML Model of sub-system (5 types of diagram/model at least to express the system to be) - Need helps from Developers 

Use Case Diagram: 




Use Case Digram: Account Management




5. Software Life Cycle Model
 
We have used Agile methodology for project management. The initial project idea is developed by involvement of all team members and user story points. The project timeline has been set for twelve weeks. The project plan divided 5 steps (CIO Council).
 
1. Specification - Gather business requirements in both functional and non-functional requirements, set requirements’ prioritization, and restrictions of the technical.
 
2. Design - Produce a model of product.
·        Create UML diagram to understand the end to end
-   ?
-   ?
-   ?
-   ?
-   ?
 
3. Development - Build product.
·      Create application using below technology:
-   Operation System: Web-based, Android, iOS, OS, Linux
-   User interface: HTML, CSS, JavaScript, jQuery
-   Framework: Twitter Bootstrap, AngularJS
-   Platform: Facebook API
-   Database: Firebase
-   Testing: Selenium
 
4. Test - Check the system meets the required specifications.
·      Design test plan, write test cases and executed test cases by manual and automation script.
·      Test Application for sanity checking as well as defense against code failure (black box, white box, regression, function, end-to-end, and ad-hoc).
 
5. Deployment - Go live time - Open to all online users
·      Goal:
-   Working accurately
-   High quality
-   Excellent performance
-   High security

8.1. Technologies Used 
 	-   Operation System: Web-based, Android, iOS, OS X, Linux
Web-based is software, which use over the Internet on a web browser. Web-based does not require installation any CDs, download any software, or worry about upgrades. Example of web-based software is Gmail, Hotmail, Yahoo Mail, and so on.
Android is a mobile operating system (OS), which based on the Linux kernel, developed by Google. Android OS is designed for use on touchscreen mobile devices such as smartphones and tablets. 
iOS is an operating system, which based on the Macintosh OS X, for Apple's proprietary mobile such as the iPhone, iPad and iPod Touch. 
OS X is the operating system for Mac.
Linux is an open source operating system. It is a freely cross-platform operating system based on Unix. It is able to install on PCs, laptops, netbooks, mobile, tablet, servers, and etc.
 	-   User interface: HTML, CSS, JavaScript, jQuery 
Hypertext Markup Language (HTML) is the language for create web pages. HTML is able to format text such as titles or headings, to arrange pictures on the application, to link to different pages within application, and to link to different application.
Cascading Style Sheets (CSS) is a style sheet language, which is used for presentation of a document on the application.
JavaScript is a dynamic computer programming language, which is commonly used as part of web browsers. JavaScript allows client-side scripts to interact with the users. It also helps control the browser and communicate asynchronously.
jQuery is a JavaScript library, which works like HTML document traversal and manipulation, event handling, and animation.
 	-   Framework: Twitter Bootstrap
Bootstrap is an open-source Javascript front-end-framework developed by the team at Twitter. It is a combination of HTML, CSS, and Javascript. Bootstrap is able to help build user interface components. Bootstrap is also support both HTML5 and CSS3.
AngularJS is AngularJS is a JavaScript framework - a library written in JavaScript. AngularJS is distributed as a JavaScript file, and is able to add on a web page with a script tag.AngularJS also extends HTML with ng-directives. There are ng-app, ng-model, and ng-bund. The ng-app directive specifics an AngularJS application. The ng-model directive hinds the value of HTML controls (input, select, textarea) to application data. The ng-bind directive hinds application data to the HTML view.
 	-   Platform: Facebook API
Facebook API is a platform for building applications, which are available to the members of the social network of Facebook. The API allows applications to support the social connections and profile data to help applications more relating, and to broadcast activities to the news feed and profile pages of Facebook  and provide individual user's’ privacy settings. API is also help users adding social story to the applications by utilizing profile, photo, page, friend, group, and event data. The API uses RESTful protocol and reactions are in JSON format.
-   Database: Firebase
Firebase is a cloud-hosted realtime database. Data is stored as JSON and synchronized in realtime to every connected client. Firebase is able to work cross-platform apps: iOS, Android, and JavaScript SDKs. Every clients are able to share realtime Database instance and automatically receive updates with the newest data.
-   Testing: Selenium
Selenium is a software testing framework for web applications. Test cases are automated and able to test the web applications. The functional requirements are tested with various test case scenarios. It has set of commands to execute activities in a browser.
 
8.2. Resource Planning
 
Project planning
 
 
1. Specification
 
 
28 May - meeting 1: Brainstorm creative ideas
31 May - meeting 2: Finalizing idea and Kick off
 
 
2. Design
 
 
7 Jun - meeting 1: Design App
 
3. Development
 
 
14 Jun - meeting 1: Software Engineer Sync up
17 Jun - meeting 2: Business Structure Sync up
 
 
4. Test
 
 
21 Jun - meeting 1: Automation test
24 Jun - meeting 2: Manual test
 
 
5. Deployment
 
 
28 Jun - meeting 1: Go-Live
5 Jul - meeting 2: User’s feedback
 
 
Budget
 
Resource
Man hours
Rate $/hr
Cost $ USD
Project manager
216
100
21,600
Business Analyst
216
95
20,520
Software Engineer 1
216
85
18,360
Software Engineer 2
216
85
18,360
Software Engineer 3
216
85
18,360
Software Test Engineer
216
80
17,280
 
 
 
114,480
 
8.3. Preview Application (Product Screenshot)
 















9. Quality and Test Plans
 
We applied both automation and manual testing.
 
- Automation testing: we used selenium and PHPUnit testing framework. The test cases cover the major flows, basic functionality and user creation such as sign up, user login, and so on. Selenium scripts also proved useful to create a lot of users for testing. We also use Selenium to test regression bugs.
 
- Manual Testing: we used manual test for test cases are not able to use automation testing by selenium. We decided to use all basic testing types: black box, white box and gray box testing (Bhuiyan). Beside that we also test all the flows by ad-hoc to ensure that we delivery high quality application to customers. We used Excel online to record the bug and its status between tester and software engineers.
 
10. Security 

	We are not saving any data locally on our server. All the log in data and the actual service data will be saved in firebase. And facebook log in API will manage the login security (Tamplin). Nothing will be explosed. As a result, the application is safe.



This is what we have on the server, no table or database saved on the server.

11. Glossary/preferences
http://reqtest.com/requirements-blog/functional-vs-non-functional-requirements/

Bhuiyan, Zahirul. “Software Testing Methodologies and types of testing.” QA Interview Questions (2016) Web. 30 June 2016. http://www.qaquestions.org/manual-testing/software-testing-methodologies-and-types-of-testing/ 

CIO Council. “Software Development Life Cycle.” CIOC Blog (2012) Web. 24 June 2016. https://cio.gov/software-development-life-cycle/ 

Tamplin, James. “The New Firebase Security API.” The Firebase Blog (2012) Web. 1 July 2016. https://firebase.googleblog.com/2012/12/the-new-firebase-security-api.html 
