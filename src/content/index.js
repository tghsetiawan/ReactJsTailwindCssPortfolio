export default {
    nav: {
        logo: 'TS',
        links: [
            { text: 'Work', to: 'mywork'},
            { text: 'Project', to: 'myporject'},
            { text: 'Contact', to: 'mycontact'},
        ],
    },
    header: {
        img: 'https://images.unsplash.com/photo-1614640418303-b5785324ad63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        text: ['Hi!', "It's me Random.", 'I am'],
        typical: [
            'web developer.',
            2000,
            'Youtuber.',
            2000,
            'Mobile Developer',
            2000,
        ],
        btnText: "Discover More"
    },

    stack: {
        title: 'Stack',
        tech:[
            {
                img: process.env.PUBLIC_URL + '/assets/csharp.png',
                alt: 'csharp',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/kotlinn.png',
                alt: 'kotlin',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/logo512.png',
                alt: 'react',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/nodejs.png',
                alt: 'node',
            },
        ],
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    }
}