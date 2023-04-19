import React, { useState, Fragment } from "react";

import { TabsWrapper, TabsNav, Tab, TabsContent } from './StyledComponents';

const Tabs = ({ tabs }) => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <TabsWrapper>
            <TabsNav>
                {tabs.length > 0 && tabs.map(tab => (
                    <Tab
                        key={tab.id}
                        isActive={tab.id === activeTab}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab?.label}
                    </Tab>
                ))}

            </TabsNav>
            <TabsContent>
                {
                    tabs.length > 0 && tabs.map(tab => {
                        if (activeTab === tab.id) {
                            return (
                                <Fragment key={tab.id}>
                                    {tab.content}
                                </Fragment>
                            )
                        }
                        return null;
                    })
                }
            </TabsContent>
        </TabsWrapper>

    );
}
export default Tabs;