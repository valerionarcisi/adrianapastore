import {request, Variables } from 'graphql-request'; 

export const graphcms = <T>(query: string, variables?: Variables): Promise<T> => {
    return request('https://api-eu-central-1.graphcms.com/v2/ckylkqjkv05yx01xs8rjocn7b/master', query, variables).then((data) => (data))
}