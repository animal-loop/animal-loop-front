var fs = require('fs');

/* Config --------*/
/*----------------*/

let arr = process.env.NODE_ENV.split("-");
let nameDir = "";
let nameFile = "";
let nameFunction = "";

arr.forEach((item)=>{

	nameDir += (nameDir == "")? item.toLowerCase() : `_${item.toLowerCase()}` ;
	if(nameFile == ""){
		nameFile += item.toLowerCase();
	}else{
		nameFile += item.substring(0,1).toUpperCase();
		nameFile += item.substring(1).toLowerCase();
	}
	
	nameFunction += item.substring(0,1).toUpperCase();
	nameFunction += item.substring(1).toLowerCase();
})

/*----------------*/
/*---  Server ----*/
/*----------------*/


/* Controllers ---*/
/*----------------*/

var dirControllers = `./source/server/controllers/${nameDir}`;
if (!fs.existsSync(dirControllers)){
    fs.mkdirSync(dirControllers);
    console.log("test")
}

/* Content */
var fileContentControllers = "import fetch from 'isomorphic-fetch';\nimport Config from '../config/';\n\nasync function get(req, res){\n\treturn res.status(200).send({response:'test'});\n}\nmodule.exports = {\n\tget\n};";

/* Path */
var filepathControllers = `./source/server/controllers/${nameDir}/index.js`;

fs.writeFile(filepathControllers, fileContentControllers, (err) => {
    if (err) throw err;

    console.log("Controllers Creado");
})

/* Routes --------*/
/*----------------*/

var dirRoutes = `./source/server/routes/${nameDir}`;
if (!fs.existsSync(dirRoutes)){
    fs.mkdirSync(dirRoutes);
}

/* Content */
var fileContentRoutes = `import express from 'express';\nimport ${nameFile}Ctrl from '../../controllers/${nameDir}/';\n\nconst ${nameFile} = express.Router();\n${nameFile}.get('/:obj', ${nameFile}Ctrl.get);\n\nexport default {\n\t${nameFile},\n};`;

/* Path */
var filepathRoutes = `./source/server/routes/${nameDir}/index.js`;

fs.writeFile(filepathRoutes, fileContentRoutes, (err) => {
    if (err) throw err;

    console.log("Routes Creado");
})

/* Server---------*/
/*----------------*/

fs.readFile('./source/server/server.jsx', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  	if(!data.includes(`/* ${nameFile} */`)){
	  	var fileContentServer = data.replace("/* Middlewares */", `/* Middlewares */\n\n\  /* ${nameFile} */\napp.use('/api/${nameFile.toLowerCase()}', ${nameFile}.${nameFile});`);
	  	fileContentServer = fileContentServer.replace("/* Api Express */", `/* Api Express */\n\n/* ${nameFile} */\n\import ${nameFile} from './routes/${nameDir}';`);
	  
	  	/* Path */
		var filepathServer = `./source/server/server.jsx`;
		fs.writeFile(filepathServer, fileContentServer, (err) => {
	    	if (err) throw err;
	    	console.log("Server Creado");
		})
	}else{
		console.log("agregado en el server")
	}
});


/*----------------*/
/*---  Client ----*/
/*----------------*/


/* Actions --------*/
/*-----------------*/

var dir = `./source/client/actions/${nameDir}`;
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

/* Content */
var fileContent = `import {\n\tFETCH_${nameDir.toUpperCase()}_INIT,\n \tFETCH_${nameDir.toUpperCase()}_SUCCESS,\n \tFETCH_${nameDir.toUpperCase()}_FAILURE,\n } from './types';\n import API from './api';\n\n function fetchApiSuccess(data) {\n \treturn {\n \t\ttype: FETCH_${nameDir.toUpperCase()}_SUCCESS,\n \t\tpayload: data,\n \t};\n }\n\n function fetchApiFailure(error) {\n \tconsole.log(error)\n \treturn {\n \t\ttype: FETCH_${nameDir.toUpperCase()}_FAILURE,\n \t\tpayload: error,\n \t};\n }\n\n function fetchApiInit() {\n \treturn {\n \t\ttype: FETCH_${nameDir.toUpperCase()}_INIT,\n \t};\n }\n\n export function fetch${nameFunction}Api(group,tags) {\n \treturn async (dispatch) => {\n \t\tdispatch(fetchApiInit());\n \t\ttry {\n \t\t\tlet data = await API.data.getAll(group, tags);\n \t\t\tdispatch(fetchApiSuccess(data));\n \t\t} catch (error) {\n \t\t\tdispatch(fetchApiFailure(error));\n \t\t}\n \t};\n }\n`;

/* Path */
var filepath = `./source/client/actions/${nameDir}/index.js`;

fs.writeFile(filepath, fileContent, (err) => {
    if (err) throw err;
    console.log("Action Creada");

    /* Actions API ----*/
	/*-----------------*/

	var dir = `./source/client/actions/${nameDir}/api`;
	if (!fs.existsSync(dir)){
    	fs.mkdirSync(dir);
	}

	/* Content */
	var fileContent = `import fetch from 'isomorphic-fetch';\nimport Config from '../../config/'\n\n const API = {\n \tdata: {\n \t\tasync getAll(obj) {\n \t\t\tlet response = await fetch(\`\${Config.api}/api/${nameFile.toLowerCase()}/\${JSON.stringify(obj)}\`);\n\n \t\t\tconst status = response.status;\n \t\t\tlet data = await response.json();\n \t\t\treturn {\n \t\t\t\tdata:data.response,\n \t\t\t\tstatus: status\n \t\t\t};\n \t\t}\n \t},\n };\n export default API;`;

	/* Path */
	var filepath = `./source/client/actions/${nameDir}/api/index.js`;

	fs.writeFile(filepath, fileContent, (err) => {
    	if (err) throw err;
    	console.log("Action API Creada");
	})

})

/* Actions --------*/
/* Types ----------*/


/* Content */
var fileContent = `export const FETCH_${nameDir.toUpperCase()}_INIT = 'FETCH_${nameDir.toUpperCase()}_INIT';\nexport const FETCH_${nameDir.toUpperCase()}_SUCCESS = 'FETCH_${nameDir.toUpperCase()}_SUCCESS';\nexport const FETCH_${nameDir.toUpperCase()}_FAILURE = 'FETCH_${nameDir.toUpperCase()}_FAILURE';\n`;

/* Path */
var filepath = `./source/client/actions/${nameDir}/types.js`;

fs.writeFile(filepath, fileContent, (err) => {
    if (err) throw err;
    console.log("Action type Creada");
})


/* Reducer--------*/
/* Init ----------*/

var dir = `./source/client/reducers/${nameDir}`;
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

/* Content */
var fileContent = `import initialState from './initialState';\n import {\n \tFETCH_${nameDir.toUpperCase()}_INIT,\n \tFETCH_${nameDir.toUpperCase()}_SUCCESS,\n \tFETCH_${nameDir.toUpperCase()}_FAILURE,\n } from '../../actions/${nameDir}/types';\n\n export default function ${nameFile}(state = initialState, action) {\n \tswitch (action.type) {\n \t\tcase FETCH_${nameDir.toUpperCase()}_INIT:\n \t\t\treturn{\n \t\t\t\t...state,\n \t\t\t\tloading: true,\n \t\t\t\terror: null,\n \t\t\t}; \t\tcase FETCH_${nameDir.toUpperCase()}_SUCCESS:\n \t\t\treturn{\n \t\t\t\t...state,\n \t\t\t\tdatos: action.payload.data,\n \t\t\t\terror: null,\n \t\t\t\tloading: false,\n \t\t\t\tstatus: action.payload.status\n \t\t\t};\n \t\t\tcase FETCH_${nameDir.toUpperCase()}_FAILURE:\n \t\t\treturn{\n \t\t\t\t...state,\n \t\t\t\tdatos: {},\n \t\t\t\terror: action.payload,\n \t\t\t\tloading: false,\n \t\t\t};\n \t\tdefault:\n \t\t\treturn state;\n \t}\n }`;

/* Path */
var filepath = `./source/client/reducers/${nameDir}/index.js`;

fs.writeFile(filepath, fileContent, (err) => {
    if (err) throw err;
    console.log("Reducers Creada");
})

/* Reducer--------*/
/* Initial state--*/

var dir = `./source/client/reducers/${nameDir}`;
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

/* Content */
var fileContent = `const initialState = {\n \tdatos: {},\n \tloading: true,\n \terror: null,\n \tstatus: null\n};\n\n export default initialState;\n`;

/* Path */
var filepath = `./source/client/reducers/${nameDir}/initialState.js`;

fs.writeFile(filepath, fileContent, (err) => {
    if (err) throw err;
    console.log("Reducers Initial state Creada");
})

/* Reducers-------*/
/* Index ---------*/

fs.readFile('./source/client/reducers/index.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  	if(!data.includes(`${nameFile}`)){
	  	var fileContentServer = data.replace("/* Reducers */", `/* Reducers */\nimport ${nameFile} from './${nameDir}/';`);
	  	fileContentServer = fileContentServer.replace("combineReducers({", `combineReducers({\n\t${nameFile},`);
	  
	  	/* Path */
		var filepathServer = `./source/client/reducers/index.js`;
		fs.writeFile(filepathServer, fileContentServer, (err) => {
	    	if (err) throw err;
	    	console.log("Reducers Complete");
		})
	}else{
		console.log("agregado en el Reducers")
	}
});


/* Containers-----*/
/* ---------------*/

var dir = `./source/client/containers/${nameDir}`;
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

/* Content */
var fileContent = `import React, { Component } from 'react';\nimport { connect } from 'react-redux';\nimport PropTypes from 'prop-types';\nimport { bindActionCreators } from 'redux';\nimport strings from '../../components/locales/';\n\n /* Function */\nimport ObjGeneral from '../function/';\n/* Local store */\nimport { localStoreFN } from '../../store/localStorage.js';\n/* Actions */\nimport * as ${nameFile}Actions from '../../actions/${nameDir}/index.js';\n\n/* Components */\nimport Loading from '../../components/common/loading';\nimport Message from '../../components/common/message';\n\nclass ${nameFunction} extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t}\n\n \tasync componentDidMount(){\n\t\tconst token = localStoreFN().getItem("token");\n\t\tawait this.props.actions.fetch${nameFunction}Api({token:token});\n\t}\n\trender() {\n\t\treturn (\n\t\t\t<section className="main">\n\t\t\t\t<div className="main-container">\n\t\t\t\t{\n\t\t\t\t\t(this.props.loading)?(\n \t\t\t\t\t\t<Loading />\n\t\t\t\t\t):(this.props.status === 200)?(\n\t\t\t\t\t\t<div className="main-container">\n\t\t\t\t\t\t\t<h1>{this.props.datos}</h1>\n\t\t\t\t\t\t\</div>\n\t\t\t\t\t):(this.props.status === 204)?(\n\t\t\t\t\t\t<Message message="NO DATA" />\n\t\t\t\t\t):(\n\t\t\t\t\t\t<Message message="API ERROR" />\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t);\n\t}\n}\nconst mapStateToProps = state => ({\n\tdatos: state.reducer.${nameFile}.datos,\n\tloading: state.reducer.${nameFile}.loading,\n \tstatus: state.reducer.${nameFile}.status,\n });\nconst mapDispatchToProps = dispatch => ({\n\tactions: bindActionCreators(${nameFile}Actions, dispatch),\n});\n${nameFunction}.propTypes = {\n\n};\n\nexport default connect(mapStateToProps,mapDispatchToProps)(${nameFunction});`;

/* Path */
var filepath = `./source/client/containers/${nameDir}/index.jsx`;

fs.writeFile(filepath, fileContent, (err) => {
    if (err) throw err;
    console.log("Reducers Initial state Creada");
})


/* Dashboard------*/
/* ---------------*/

fs.readFile('./source/client/containers/dashboard/index.jsx', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  	if(!data.includes(`${nameFunction}`)){
	  	var fileContentServer = data.replace("/*Components*/", `/*Components*/\nimport ${nameFunction} from '../${nameDir}/';`);
	  	fileContentServer = fileContentServer.replace("<Route exact path={this.props.match.path} component={Home} />", `<Route exact path={this.props.match.path} component={Home} />\n\t\t\t\t\t\t\t\t<Route path={\`\${this.props.match.path}/${nameDir.toLowerCase()}\`} component={${nameFunction}} />`);
	  	/* Path */
		var filepathServer = `./source/client/containers/dashboard/index.jsx`;
		fs.writeFile(filepathServer, fileContentServer, (err) => {
	    	if (err) throw err;
	    	console.log("Dashboard Complete");
		})
	}else{
		console.log("agregado al dashboard")
	}
});

/* Dashboard------*/
/* ---------------*/

fs.readFile('./source/client/components/nav/index.jsx', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  	if(!data.includes(`${nameFunction}`)){
	  	var fileContentServer = data.replace("</nav>", `\t<div className="nav_box">\n\t\t\t<div><h3><Link to="/dashboard/${nameDir.toLowerCase()}" id="menu-100" className="unique" data-type="menu" onClick={props.handleNav}><span className="icon-box"><img src={Icon} alt="icon"/></span><span className="text-box">${nameFile}</span></Link></h3></div>\n \t\t</div>\n\t</nav>`);
	  	/* Path */
		var filepathServer = `./source/client/components/nav/index.jsx`;
		fs.writeFile(filepathServer, fileContentServer, (err) => {
	    	if (err) throw err;
	    	console.log("Nav Complete");
		})
	}else{
		console.log("agregado en nav")
	}
});
