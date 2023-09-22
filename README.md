**Data Service :**

1. Open the dataservice folder to get it to recognise the package structure in order fro intellij to run.
2. Run mvn clean install -U
3. Run DataServiceApplication
4. To test run : mvn test


**Ui :**

*To Run the ui:*

npm run start

*To format the ui:*

npm run pretty

*To clear and reset node conflicts and dependencies:*

 rm node_modules
 rm package-lock.json
 npm cache clean --force    