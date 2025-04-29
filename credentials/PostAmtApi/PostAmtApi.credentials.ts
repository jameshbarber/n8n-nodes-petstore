import {
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class PostAmtApi implements ICredentialType {
  name = 'postAmtApi';
  displayName = 'PostAmt API';
  documentationUrl = 'https://docs.yourapiwebsite.com';
  properties: INodeProperties[] = [
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      default: '',
    },
    {
      displayName: 'API URL',
      name: 'url',
      type: 'string',
      default: 'https://your-api-base-url.com',
    },
  ];
} 