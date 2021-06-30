import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory"
import { SideBar } from '../components/extras';
import { VStack, useBreakpointValue as modifyAs } from '@chakra-ui/react';
import { MenuDrawer, Navigation } from '../../components';

const history = createBrowserHistory()

export function DashboardRoutes({ lang, setLang, width, height, drawer, drawerRef, data }: {
    lang: string;
    setLang: any;
    width: number;
    height: number;
    drawer: any;
    drawerRef: any;
    menu?: boolean
    data: any
}) {

    const rightWidth = modifyAs(["0", "50%", "30%", "20%", "15%"])

    return (
        <Switch>
            <Route
                exact
                path="/dashboard"
                render={props => (
                    <>
                        <div>
                            <SideBar {...props} lang={lang} />
                        </div>
                        <VStack ml={rightWidth} p={4}>
                            <Navigation
                                data={data}
                                menu={false}
                                drawer={drawer}
                                drawerRef={drawerRef}
                                lang={lang}
                            />
                            <p>excluded</p>
                        </VStack>
                    </>
                )}
            />
            <Route
                path="/dashboard/:guildId"
                render={props => (<p>included</p>
                )}
            />
        </Switch>
    )
}