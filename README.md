# dns-ui

## System setup

### LTS nodejs

	curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
	sudo apt install nodejs

	$ npm -v
	5.6.0

	$ node -v
	v8.11.1

Used [Visual Studio Code](https://code.visualstudio.com/) as an editor.

## New project

Start with a template angular project. Let's call it dns-ui.

    ng new dns-ui
    ng serve
    
Application is now live on http://localhost:4200 and updates automatically as resources change.

### [Clarity](https://vmware.github.io/clarity)

Some pre-made components, css files and stuff. Just having a look. Used the 'Single Action' Datagrid component.

    npm install @clr/icons --save
    npm install @webcomponents/custom-elements@1.0.0 --save
    npm install @clr/ui --save
    npm install @clr/angular --save

Import ClarityModule on app.module.ts

### Angular

The rest of the work is largely based on the ["Tour of Heroes" tutorial](https://angular.io/tutorial). Still a work in progress.
