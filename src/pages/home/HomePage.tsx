import * as React from 'react';
import CBioPortalAPI from "../../shared/api/CBioPortalAPI";
import {CancerStudy} from "../../shared/api/CBioPortalAPI";
import AppConfig from 'appConfig';

interface IHomePageProps
{
}

interface IHomePageState
{
    data?:CancerStudy[];
}

export default class HomePage extends React.Component<IHomePageProps, IHomePageState>
{
    constructor(props:IHomePageProps)
    {
        super(props);
        this.state = {};
    }

    client = new CBioPortalAPI(`//${AppConfig.apiRoot}`);

    componentDidMount()
    {
        this.client.getAllStudiesUsingGET({
            projection: "DETAILED"
        }).then(data => {
            this.setState({data});
        });
    }

    public render() {
        return <pre>
            { JSON.stringify(this.state.data, null, 4) }
        </pre>;
    }
};
