import React from 'react';
import Faq from './Faq';

const FaqPage = () => { 
    const items = [
    {
       title: "Section 1",
       content: "This is the content of section 1"
    },
    {
       title: "Section 2",
       content: "This is the content of section 2"
    },
    {
       title: "Section 3",
       content: "This is the content of section 3"
    }
 ]

 
return (
    <div>
        <Faq items={items}/>
    </div>
    );
};

export default FaqPage;
