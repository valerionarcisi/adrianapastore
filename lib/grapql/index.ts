import {request } from 'graphql-request'; 

export const graphcmq = <T>(query: string):Promise<T> => request('https://api-eu-central-1.graphcms.com/v2/ckylkqjkv05yx01xs8rjocn7b/master', query).then((data) => (data))