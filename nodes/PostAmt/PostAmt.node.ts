import {INodeType, INodeTypeDescription, IExecuteFunctions, INodeExecutionData} from 'n8n-workflow';
import {N8NPropertiesBuilder, N8NPropertiesBuilderConfig} from '@devlikeapro/n8n-openapi-node';
import * as doc from './openapi.json';

const config: N8NPropertiesBuilderConfig = {}
const parser = new N8NPropertiesBuilder(doc, config);
const properties = parser.build()

export class PostAmt implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'PostAmt',
        name: 'postamt',
        icon: 'file:logo.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Send templated messages via different channels',
        defaults: {
            name: 'PostAmt',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'postAmtApi',
                required: true,
            },
        ],
        requestDefaults: {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': '={{ "Bearer " + $credentials.apiKey }}',
            },
            baseURL: '={{ $credentials.url }}',
        },
        properties: properties,
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        // This is automatically handled by n8n-openapi-node
        // But you can add custom logic here if needed
        return [];
    }
} 