
import { CodegenConfig } from '@graphql-codegen/cli';

export const config: CodegenConfig = {
	overwrite: true,
	ignoreNoDocuments: true,
	documents: "./src/**/*.graphql",
	config: {
		preResolveTypes: true,
		skipTypename: false,
	},
	schema: [
		{
			[process.env.CONTENTFUL_GRAPHQL_ENDPOINT || '']: {
				headers: {
					Authorization: `Bearer ${process.env.CONTENTFUL_MANAGEMENT_TOKEN}`,
				},
			},
		},
	],
	generates: {
		'src/contentful/types.ts':{
			presetConfig: {gqlTagName: 'gql'},
			plugins: ['typescript', 'typescript-graphql-request','typescript-operations','typed-document-node']
		},
	}
};

export default config;