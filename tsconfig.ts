{
	"compilerOptions": {
		"target": "ESNext",
		"useDefineForClassFields": true,
		"lib": ["DOM", "DOM.Iterable", "ESNext"],
		"allowJs": false,
		"allowSyntheticDefaultImports": true,
		"strict": true,
		"forceConsistentCasingInFileNames": true,
		"module": "ESNext",
		"moduleResolution": "Node",
		"resolveJsonModule": true,
		"isolatedModules": true,
		"noEmit": true,
		"jsx": "react-jsx",
		"declaration": true,
		"skipLibCheck": true,
		"esModuleInterop": true,
		"declarationMap": true
	},
	"include": ["src", "./node_modules/@mui/material"],
	// "exclude": ["./node_modules", "./dist"],
	"references": [{ "path": "./tsconfig.node.json" }]
}