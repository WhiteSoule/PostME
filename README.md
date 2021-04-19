# PostME
We first need to create an application on which we can use our BDD development. For this we will use Vue CLI to create a project. 
If you don't have vue cli installed on your device use:
```sh
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```
If you have vue cli installed run :
```sh
vue create postme
```
You will then be able to select a preset but we are going to select our features manually:
![image](https://user-images.githubusercontent.com/47774595/115294723-3ea39000-a159-11eb-9403-096041c4abe2.png)
press Enter to continue

Then we are going to leave the selected features selected and add the Router feature to our preset.
![image](https://user-images.githubusercontent.com/47774595/115295823-78c16180-a15a-11eb-9c3c-4998748b7646.png)
press Enter to continue

Select the Vue # version
![image](https://user-images.githubusercontent.com/47774595/115295899-9098e580-a15a-11eb-9988-3a7b495782c0.png)

press n to not use history mode for router end then press Enter
![image](https://user-images.githubusercontent.com/47774595/115296040-bc1bd000-a15a-11eb-9b17-c05a23f7844a.png)
Use ESLint + Prettier
![image](https://user-images.githubusercontent.com/47774595/115296106-d2c22700-a15a-11eb-89bb-ee6753a03e30.png)
And select Lint on save
![image](https://user-images.githubusercontent.com/47774595/115296175-e7062400-a15a-11eb-8fa7-b163b8ccf13a.png)
place the configuration setup in a package.json and press N to not save the preset for future projects.
There you go! Vue cli is creating the project for you.
Once done it will ask you to enter the project directory and type
```sh
$ npm run serve
```
We are goin to remove some stuff to make it fir our postme application.
In the components folder we will find the HelloWorld component. We will delete it because we are going to create our own components.
Since we deleted the HelloWorld components in the views folder, in the Home.vue file delete the HelloWorld tag aswell as the import and the component from the export part.

We can leave the application like this for now.
You can now checkout the branch "into-BDD"
