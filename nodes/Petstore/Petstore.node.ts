import {INodeType, INodeTypeDescription} from 'n8n-workflow';
import {N8NPropertiesBuilder, N8NPropertiesBuilderConfig} from '@devlikeapro/n8n-openapi-node';
import axios from 'axios';

export class Petstore implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Petstore',
        name: 'petstore',
        icon: 'file:logo.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interact with Petstore API',
        defaults: {
            name: 'Petstore',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'petstoreApi',
                required: false,
            },
        ],
        requestDefaults: {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            baseURL: 'https://petstore3.swagger.io/api/v3',
        },
        properties: [],
    };

    async init(): Promise<void> {
        try {
            const response = await axios.get('https://petstore3.swagger.io/api/v3/openapi.json');
            const spec = response.data;
            
            const config: N8NPropertiesBuilderConfig = {};
            const parser = new N8NPropertiesBuilder(spec, config);
            this.description.properties = parser.build();
        } catch (error) {
            console.error('Failed to fetch or parse remote OpenAPI spec:', error);
        }
    }
}
