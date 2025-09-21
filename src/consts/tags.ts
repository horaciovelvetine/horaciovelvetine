// Create objects that map to the actual string values
const LANGUAGES = {
	cpp: 'C++',
	java: 'Java',
	python: 'Python',
	typeScript: 'TypeScript',
	javaScript: 'JavaScript',
	ruby: 'Ruby',
	sql: 'SQL',
	html: 'HTML',
	css: 'CSS',
} as const;

const BUILD = {
	cmake: 'CMake',
	maven: 'Maven',
	vite: 'Vite',
	postCSS: 'PostCSS',
	nodeJS: 'NodeJS',
} as const;

const FRAMEWORKS = {
	springBoot: 'Spring Boot',
	react: 'React',
	rubyOnRails: 'Ruby on Rails',
	vue: 'Vue',
	sinatra: 'Sinatra',
} as const;

const LIBRARIES = {
	gTest: 'GTest',
	guava: 'Guava',
	jUnit: 'JUnit',
	jackson: 'Jackson',
	vavr: 'vavr',
	jung: 'JUNG',
	wikidataToolkit: 'Wikidata Toolkit',
	tanstackRouter: 'Tanstack Router',
	tanstackQuery: 'Tanstack Query',
	reactDraggable: 'React-Draggable',
	reactMarkdown: 'React-Markdown',
	rehypeHighlight: 'Rehype-Highlight',
	remark: 'Remark',
	rehypeRaw: 'Rehype-Raw',
	remarkGfm: 'Remark-gfm',
	p5js: 'P5.js',
	discordJs: 'Discord.js',
	lodash: 'Lodash',
	pgSearch: 'PG Search',
	jest: 'Jest',
	cypress: 'Cypress',
	faker: 'Faker',
	omniauth: 'OmniAuth',
	devise: 'Devise',
	capybara: 'Capybara',
	nokogiri: 'Nokogiri',
} as const;

const DB = {
	mySQL: 'MySQL',
	postgresSQL: 'Postgres SQL',
} as const;

const PROGRAMMING = {
	vsCode: 'VSCode',
	cursor: 'Cursor',
	postman: 'Postman',
	azure: 'Azure',
	aws: 'AWS',
	replit: 'Replit.io',
	heroku: 'Heroku',
	github: 'Github',
} as const;

const VISUAL = {
	tailwindCSS: 'Tailwind CSS',
	bootstrap: 'Bootstrap',
	figma: 'Figma',
	photoshop: 'Photoshop',
	illustrator: 'Illustrator',
	premierePro: 'Premiere Pro',
} as const;

const UI = {
	materialUI: 'Material-UI',
	daisyUI: 'Daisy-UI',
	shadcnUI: 'Shadcn-UI',
	heroUI: 'Hero-UI',
	radixUI: 'Radix-UI',
} as const;

const AUDIO = {
	proTools: 'Pro Tools',
	logicProX: 'Logic Pro X',
	ableton: 'Ableton',
	audacity: 'Audacity',
	izotopeRX: 'Izotope RX',
	dante: 'Dante',
} as const;

const PRODUCTIVITY = {
	microsoftOffice: 'Microsoft Office',
	squarespace: 'Squarespace',
	wordpress: 'Wordpress',
	slack: 'Slack',
	discord: 'Discord',
	teams: 'Teams',
	zoom: 'Zoom',
} as const;

const COMPUTER_SCIENCE = {
	fundamentals: 'Fundamentals',
	designPatterns: 'Design Patterns',
	guide: 'Guide',
	exploration: 'Exploration',
	mathematics: 'Mathematics',
	visualizations: 'Visualizations',
	graphics: 'Graphics',
	deployment: 'Deployment',
	ciCd: 'CI/CD',
	graphs: 'Graphs',
	processing: 'Processing',
	algorithms: 'Algorithms',
	tools: 'Tools',
	devlog: 'Devlog',
	graphTheory: 'Graph Theory',
} as const;

const PROJECTS = {
	theWikiverse: 'the Wikiverse',
	solvedoku: 'Solvedoku',
	rockPaperScissors: 'Rock, Paper, Scissors',
	findingCentroids: 'Finding Centroids',
	portfolio: 'Portfolio',
} as const;

// Create the main Tags export object
export const Tags = {
	languages: LANGUAGES,
	build: BUILD,
	frameworks: FRAMEWORKS,
	libraries: LIBRARIES,
	db: DB,
	programming: PROGRAMMING,
	visual: VISUAL,
	ui: UI,
	audio: AUDIO,
	productivity: PRODUCTIVITY,
	topics: COMPUTER_SCIENCE,
	projects: PROJECTS,
} as const;
